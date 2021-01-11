import React, { useEffect } from "react";
import { NATURE_SUMMARY } from "../../helpers/ReportsGraphQL";
import { useLazyQuery, useQuery } from "@apollo/react-hooks";
import BarGraph from "../../components/graph/BarGraph";
import ChartDataLabels from "chartjs-plugin-datalabels";
import useProfile from "../../components/hooks/useProfile";
import { ColorsHelper } from "../../helpers/ColorsHelper";

function ComplaintsByNatureGraph({ filter }) {
  useProfile();

  const [fetchData, { loading, data, error }] = useLazyQuery(NATURE_SUMMARY, {
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

  let placeHolder = [
    { name: "Not Assigned", count: 0 },
    { name: "Assigned", count: 0 },
    { name: "Completed", count: 0 },
    { name: "Feedback Sent", count: 0 },
  ];
  console.log(data.natureSummary);

  let natureList = data.natureSummary
    .map((d) => {
      return d.name;
    })
    .filter((v, i, a) => a.indexOf(v) === i);
  let res = placeHolder.map((s) => {
    return {
      label: s.name,
      backgroundColor: ColorsHelper.randomColor(),
      data: natureList.map((p) => {
        let x = data.natureSummary.find(
          (d) => d.name === p && d.status === s.name
        );
        return x ? x.count : 0;
      }),
    };
  });

  const meta = {
    data: res,
    labels: natureList.map((r) => r),
    beginAtZero: true,
  };
  return (
    <BarGraph
      stacked={true}
      meta={meta}
      title="Complaints Nature Summary"
      graphId="complaints-nature-summary"
    />
  );
}

export default ComplaintsByNatureGraph;
