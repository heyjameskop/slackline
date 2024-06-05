import logo from "./images/stackline_logo.svg";
import "./App.css";
import ShowProduct from "./ShowProduct";
import { ShowSales } from "./ShowSales";
import ChartProduct from "./ChartProduct";
import { DataProvider } from "./context/DataContext";

function App() {
  return (
    <>
      <DataProvider>
        <div className="container">
          <>
            <div className="header">
              <img src={logo} className="logo" alt="logo" />
            </div>
            <div className="main">
              <div className="left-column">
                <ShowProduct />
              </div>
              <div className="right-column">
                <div className="top-row right-box">
                  <h1>Retail Sales</h1>
                  <ChartProduct />
                </div>
                <div className="bottom-row right-box">
                  <div className="chart">
                    <ShowSales />
                  </div>
                </div>
              </div>
            </div>
          </>
        </div>
      </DataProvider>
    </>
  );
}

export default App;
