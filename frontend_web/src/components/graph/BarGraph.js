import React from "react";
import Chart from "chart.js";
import Numbers from "../../helpers/Numbers";
import { useEffect } from "react";

const BarGraph = ({ graphId, meta, title, extra = null, type = "bar" }) => {
  useEffect(() => {
    const data = {
      datasets: meta.data,
      labels: meta.labels,
    };
    console.log(data);
    const options = {
      plugins: {
        datalabels: {
          display: true,
        },
      },
      hover: {
        mode: "index",
        intersect: false,
      },
      tooltips: {
        mode: "index",
        intersect: false,
        callbacks: {
          label: function (tooltipItem, data) {
            let ds = data.datasets[tooltipItem.datasetIndex];
            let val = ds.data[tooltipItem.index];
            let lab = ds.label;
            return `${Numbers.fmt(val)} : ${lab}`;
          },
        },
      },
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: meta.beginAtZero || false,
              callback: function (value) {
                return value.toLocaleString();
              },
            },
          },
        ],
      },
    };

    new Chart(document.getElementById(graphId), {
      type: type,
      data: data,
      options: options,
    });
  }, []);

  return (
    <div className={`graph-container bg-white card p-2 ${extra ? extra : ""}`}>
      <h6>{title}</h6>
      <canvas id={graphId} className="graph" style={{}}></canvas>
    </div>
  );
};

export default BarGraph;
