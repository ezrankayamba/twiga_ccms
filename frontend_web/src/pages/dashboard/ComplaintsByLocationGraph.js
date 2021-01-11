import React, { useEffect } from "react";
import { LOCATION_SUMMARY } from "../../helpers/ReportsGraphQL";
import { useLazyQuery, useQuery } from "@apollo/react-hooks";
import PieChart from "../../components/graph/PieChart";
import useProfile from "../../components/hooks/useProfile";

function ComplaintsByLocationGraph({ filter }) {
  useProfile();

  const [fetchData, { loading, data, error }] = useLazyQuery(LOCATION_SUMMARY, {
    variables: { ...filter },
  });

  useEffect(() => {
    const abortCtrl = new AbortController();
    console.log(filter)
    fetchData()
    return () => {
      abortCtrl.abort();
    }
  }, [filter])

  if (loading) return null;
  if (error) return null;
  if (!data) return null;
  console.log(data);

  const meta = {
    data: data.locationSummary.map((r) => {
      return {
        name: r.locName,
        value: r.locCount,
      };
    }),
  };
  return (
    <PieChart
      meta={meta}
      title="Complaints Location Summary"
      graphId="complaints-location-summary"
    />
  );
}

export default ComplaintsByLocationGraph;
