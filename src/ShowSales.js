import React from "react";
import { useState } from "react";
import DataContext from "./context/DataContext";
import { useContext } from "react";

export const ShowSales = () => {
  const { selectedProduct, handleSort, sortDirection, sortedData } =
    useContext(DataContext);
  const stats = [
    "weekEnding",
    "retailSales",
    "wholesaleSales",
    "unitsSold",
    "retailerMargin",
  ];

  return (
    <>
      <div className="head">
        {stats.map((stat, index) => (
          <span
            className={`sortable ${sortDirection[stat]}`}
            onClick={() => handleSort(stat)}
            key={index}
          >
            {stat.replace(/([a-z])([A-Z])/g, "$1 $2")}
          </span>
        ))}
      </div>
      {sortedData.map((info, index) => (
        <div key={index} className="productBody">
          <div className="highlight">
            {stats.map((stat, index) => (
              <span key={index} className="item">
                {info[stat]}
              </span>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};
