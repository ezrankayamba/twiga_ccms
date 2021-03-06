import React, { useEffect } from "react";
import { KPI_SUMMARY } from "../../helpers/ReportsGraphQL";
import { useLazyQuery } from "@apollo/react-hooks";
import useProfile from "../../components/hooks/useProfile";
import BarGraph from "../../components/graph/BarGraph";
import { ColorsHelper } from "../../helpers/ColorsHelper";

function ComplaintsKPIGraph({ filter }) {
  useProfile();

  const [fetchData, { loading, data, error }] = useLazyQuery(KPI_SUMMARY, {
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
    { name: "1 week", count: 0 },
    { name: "2 weeks", count: 0 },
    { name: "3-4 weeks", count: 0 },
    { name: "5-6 weeks", count: 0 },
    { name: "7-8 weeks", count: 0 },
    { name: "Above 8 weeks", count: 0 },
  ];
  console.log(data.kpiSummary);

  let natureList = data.kpiSummary
    .map((d) => d.natureName)
    .filter((v, i, a) => a.indexOf(v) === i);
  let res = natureList.map((nat) => {
    return {
      label: nat,
      backgroundColor: ColorsHelper.randomColor(),
      data: placeHolder.map((p) => {
        let x = data.kpiSummary.find(
          (d) => d.natureName === nat && d.name === p.name
        );
        return x ? x.count : 0;
      }),
    };
  });

  const meta = {
    data: res,
    labels: placeHolder.map((r) => r.name),
    beginAtZero: true,
  };

  return (
    <BarGraph
      stacked={true}
      meta={meta}
      title="Complaints KPI"
      graphId="complaints-kpi-summary"
    />
  );
}

export default ComplaintsKPIGraph;
