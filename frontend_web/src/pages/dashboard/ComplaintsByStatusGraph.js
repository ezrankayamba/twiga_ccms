import React, { useEffect, useState } from "react";
import { STATUS_SUMMARY } from "../../helpers/ReportsGraphQL";
import { useLazyQuery, useQuery } from "@apollo/react-hooks";
import PieChart from "../../components/graph/PieChart";
import useProfile from "../../components/hooks/useProfile";

function ComplaintsByStatusGraph({ filter }) {
  useProfile();
  const [fetchData, { loading, data, error }] = useLazyQuery(STATUS_SUMMARY, {
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
    data: data.statusSummary.map((r) => {
      return {
        name: r.name,
        value: r.count,
      };
    }),
  };
  return (
    <PieChart
      meta={meta}
      title="Complaints Status Summary"
      graphId="complaints-status-summary"
    />
  );
}

export default ComplaintsByStatusGraph;
