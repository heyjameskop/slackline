import React from "react";
import { Line } from "react-chartjs-2";
import DataContext from "./context/DataContext";
import { useContext } from "react";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
} from "chart.js";

const ChartProduct = () => {
  const { selectedProduct } = useContext(DataContext);
  if (Object.entries(selectedProduct).length === 0) return "";
  const values = selectedProduct.sales.map((obj) => {
    return `${obj.unitsSold}`;
  });

  ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement);

  const options = {
    scales: {
      x: {
        ticks: {
          autoSkip: true,
        },
      },
    },
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: false,
      },
    },
  };

  const monthLabels = [
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JUN",
    "JUL",
    "AUG",
    "SEP",
    "OCT",
    "NOV",
    "DEC",
  ];

  const data = {
    labels: monthLabels,
    datasets: [
      {
        label: "",
        data: values,
        fill: false,
        borderColor: "rgb(70, 168, 246)",
        tension: 0.5,
      },
    ],
  };

  return (
    <div>
      <Line data={data} options={options} />
    </div>
  );
};

export default ChartProduct;
