import React from "react";

const ShowProduct = ({ selectedProduct }) => {
  const product = selectedProduct;
  return (
    <>
      <div className="itemInfo">
        <img src={product.image} alt="" className="productImage" />
        <h1>{product.title}</h1>
        <div>{product.subtitle}</div>
      </div>
      <div className="options">
        <ul>
          {product.tags.map((tag, index) => (
            <li key={index}>{tag}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default ShowProduct;
