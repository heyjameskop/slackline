import logo from "./images/stackline_logo.svg";
import "./App.css";
import { useState, useEffect } from "react";
import ShowProduct from "./ShowProduct";
import { ShowSales } from "./ShowSales";
import ChartProduct from "./ChartProduct";
function App() {
  const API_URL = "https://www.heyjames.com/slackline.php";
  const [selectedProduct, setSelectedProduct] = useState({});
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
    <>
      <div className="container">
        {selectedProduct.length < 1 && <>Loading...</>}
        {Object.entries(selectedProduct).length !== 0 && (
          <>
            <div className="header">
              <img src={logo} className="logo" alt="logo" />
            </div>
            <div className="main">
              <div className="left-column">
                <ShowProduct selectedProduct={selectedProduct} />
              </div>
              <div className="right-column">
                <div className="top-row right-box">
                  <h1>Retail Sales</h1>
                  <ChartProduct selectedProduct={selectedProduct} />
                </div>
                <div className="bottom-row right-box">
                  <div className="chart">
                    <ShowSales
                      selectedProduct={selectedProduct}
                      setSelectedProduct={setSelectedProduct}
                    />
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default App;
