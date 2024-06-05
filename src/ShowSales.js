import React from "react";
import { useState } from "react";

export const ShowSales = ({ selectedProduct, setSelectedProduct }) => {
  const stats = [
    "weekEnding",
    "retailSales",
    "wholesaleSales",
    "unitsSold",
    "retailerMargin",
  ];

  const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });

  const sortedData = [...selectedProduct.sales].sort((a, b) => {
    if (a[sortConfig.key] < b[sortConfig.key]) {
      return sortConfig.direction === "asc" ? -1 : 1;
    }
    if (a[sortConfig.key] > b[sortConfig.key]) {
      return sortConfig.direction === "asc" ? 1 : -1;
    }
    return 0;
  });

  const handleSort = (key) => {
    let direction = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key, direction });

    setSortDirection((prevSortDirection) => ({
      ...prevSortDirection,
      [key]: prevSortDirection[key] === "asc" ? "desc" : "asc",
    }));
  };

  const [sortDirection, setSortDirection] = useState({}); // State to keep track of sort direction

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
