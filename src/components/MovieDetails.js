import React, { useEffect } from "react";
import { toast } from "react-toastify";

export default function MovieDetails(props) {
  const data =
    props.showMovieDetails ||
    JSON.parse(localStorage.getItem("showMovieDetails"));

  useEffect(
    () => localStorage.setItem("showMovieDetails", JSON.stringify(data)),
    []
  );

  function handleAddToCart(id) {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    let isItemAlreadyInCart = false;

    cart.map((item) => {
      if (item === id) {
        isItemAlreadyInCart = true;
      } else {
        isItemAlreadyInCart = false;
      }
    });

    if (isItemAlreadyInCart) {
      toast.error("Item is already in cart");
    } else {
      cart.push(id);
      localStorage.setItem("cart", JSON.stringify(cart));
      toast.success("Item added to cart");
    }
  }

  return (
    <div className="flex flex-col items-center justify-center w-full p-2">
      <h1>Movie Details</h1>
      {data?.id ? (
        <div className="w-3/12">
          <h2>{data?.title}</h2>
          <img className="py-1" src={data?.posterurl} alt={data?.title} />
          <button
            className="bg-blue-200 hover:bg-blue-300 text-center p-1 text-sm rounded"
            onClick={() => handleAddToCart(data?.id)}
          >
            Add to Cart
          </button>
        </div>
      ) : null}
    </div>
  );
}
