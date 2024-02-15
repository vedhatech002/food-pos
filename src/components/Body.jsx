import { useState } from "react";
import data from "../data/data.json";
import FoodCard from "./FoodCard";

import CartContext from "../utils/CartContext";
import Cart from "./Cart";
const Body = ({ searchQuery }) => {
  console.log(searchQuery);
  const [cart, setCart] = useState([]);

  const { products } = data;
  const filterdProducts = searchQuery
    ? products.filter((obj) =>
        obj.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : null;
  console.log(filterdProducts);
  const addProductToCart = (foodItem) => {
    // console.log(foodItem);
    // check if product already exists
    let findProductInCart = cart.find((i) => i.id === foodItem.id);
    if (findProductInCart) {
      alert("item already exists..");
      return;
    } else {
      let addingProduct = {
        ...foodItem,
        quantity: 1,
        totalAmount: foodItem.price,
      };
      setCart([...cart, addingProduct]);
    }
  };
  // console.log(cart);
  return (
    <CartContext.Provider value={{ cartDatas: cart, setCart }}>
      <main className="grid grid-cols-[3fr,1fr] pt-16 font-poppins">
        <div className="grid grid-cols-4 gap-4 py-10 px-6">
          {filterdProducts !== null ? (
            filterdProducts.length !== 0 ? (
              filterdProducts.map((product) => (
                <FoodCard
                  key={product.id}
                  product={product}
                  addProductToCart={addProductToCart}
                />
              ))
            ) : (
              <h1 className="text-lg text-center ">No FoodItems Found...</h1>
            )
          ) : (
            products.map((product) => (
              <FoodCard
                key={product.id}
                product={product}
                addProductToCart={addProductToCart}
              />
            ))
          )}
        </div>
        {/* cart */}
        <Cart />
      </main>
    </CartContext.Provider>
  );
};

export default Body;
