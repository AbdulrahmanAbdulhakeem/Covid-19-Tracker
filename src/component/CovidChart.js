import React, { useEffect } from "react";
import { Chart as ChartJS } from "chart.js/auto";
import { Chart } from "react-chartjs-2";
import { Line } from "react-chartjs-2";

function CovidChart({ date, deathCases, allCases, country, recover }) {
  useEffect(() => {
    console.log(allCases);
    console.log(date);
    console.log(deathCases);
  }, [country]);

  const data = {
    labels: date.map((dates) => dates),
    datasets: [
      {
        label: "Cases of Covid",
        data: allCases.map((cases) => cases),
        backgroundColor: ["red"],
      },
      {
        label: "Death Cases",
        data: deathCases.map((deaths) => deaths),
        backgroundColor: ["black"],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  };

  return (
    <div className="chart">
      <Line data={data} />
    </div>
  );
}

export default CovidChart;
