import { createContext, useState, useEffect } from "react";

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  const API_URL = "https://www.heyjames.com/slackline.php";
  const [selectedProduct, setSelectedProduct] = useState({
    sales: [],
    tags: [],
  });

  const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });
  const [sortDirection, setSortDirection] = useState({}); // State to keep track of sort direction

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

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(API_URL);
        const returnedProduct = await response.json();
        const extraConversion = JSON.parse(returnedProduct);
        setSelectedProduct(extraConversion[0]);
      } catch (err) {
        console.log(err.stack);
      }
    };
    (async () => await fetchItems())();
  }, []);
  return (
    <DataContext.Provider
      value={{
        selectedProduct,
        handleSort,
        sortedData,
        sortDirection,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
