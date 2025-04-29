import { useContext } from "react";
import React from 'react';
import { useParams } from "react-router-dom";
import { CartContext } from "../contexts/CartContext";
import { ProductContext } from "../contexts/ProductContext";

const ProductDetails = () => {
  const { id } = useParams();
  const { products } = useContext(ProductContext);
  const { addToCart } = useContext(CartContext);

  const product = products.find(item => {
    return item.id === parseInt(id);
  });

  if (!product) {
    return (
      <section className="h-screen flex justify-center items-center">
        <div className="text-2xl font-semibold">Loading...</div>
      </section>
    );
  }

  const { title, price, description, image } = product;
  
  return (
    <section className="pt-32 pb-12 lg:py-32 h-screen flex items-center bg-gray-100">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center bg-white p-6 rounded-lg shadow-lg">
          <div className="flex flex-1 justify-center items-center mb-8 lg:mb-0">
            <img className="max-w-[250px] lg:max-w-[400px] rounded-lg shadow-md" src={image} alt={title} />
          </div>
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-3xl font-semibold mb-4 text-gray-800">{title}</h1>
            <div className="text-xl text-primary font-semibold mb-6">
              Rs. {price}
            </div>
            <p className="text-gray-700 mb-8 max-w-[500px] mx-auto">{description}</p>
            <button
              onClick={() => addToCart(product, product.id)}
              className="bg-primary py-4 px-8 text-white text-lg rounded-md hover:bg-primary-dark transition duration-300"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
