import React from "react";
import DataContext from "./context/DataContext";
import { useContext } from "react";

const ShowProduct = () => {
  const { selectedProduct } = useContext(DataContext);
  return (
    <>
      <div className="itemInfo">
        <img src={selectedProduct.image} alt="" className="productImage" />
        <h1>{selectedProduct.title}</h1>
        <div>{selectedProduct.subtitle}</div>
      </div>
      <div className="options">
        <ul>
          {selectedProduct.tags.map((tag, index) => (
            <li key={index}>{tag}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default ShowProduct;
