import React from "react";
import { NATURE_SUMMARY } from "../../helpers/ReportsGraphQL";
import { useQuery } from "@apollo/react-hooks";
import BarGraph from "../../components/graph/BarGraph";
import ChartDataLabels from "chartjs-plugin-datalabels";

function ComplaintsByNatureGraph(props) {
  const { loading, data } = useQuery(NATURE_SUMMARY);
  if (loading) return null;
  console.log(data);
  let allProps = {
    backgroundColor: "rgba(255, 212, 0, .5)",
    borderWidth: 1,
  };
  let completeProps = {
    backgroundColor: "#3FF",
    borderWidth: 1,
  };
  const meta = {
    data: [
      {
        ...allProps,
        data: data.natureSummary.map((r) => r.countAll),
        label: "Total",
      },
      {
        ...completeProps,
        data: data.natureSummary.map((r) => r.countDone),
        label: "Completed",
      },
    ],
    labels: data.natureSummary.map((r) => r.name),
    beginAtZero: true,
  };
  return (
    <BarGraph
      meta={meta}
      graphId="test-graph"
      title="Complaints By Nature"
      //   extra="grid-all-cols"
    />
  );
}

export default ComplaintsByNatureGraph;
