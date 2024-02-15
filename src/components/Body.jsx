import { useState } from "react";
import data from "../data/data.json";
import FoodCard from "./FoodCard";
import CartItem from "./CartItem";
import CartContext from "../utils/CartContext";
const Body = () => {
  const [cart, setCart] = useState([]);

  const { products } = data;

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
      <main className="grid grid-cols-[3fr,1fr]">
        <div className="grid grid-cols-4 gap-4 py-10 px-6">
          {products.map((product) => (
            <FoodCard
              key={product.id}
              product={product}
              addProductToCart={addProductToCart}
            />
          ))}
        </div>
        {/* cart */}
        <div className="border-l-[1.5px] border-gray-200">
          <h1 className="text-xl font-semibold mx-3 py-3 border-b-[1.5px]">
            Cart Items
          </h1>
          {/* products arae */}
          <div className="mx-3 py-3 space-y-3">
            {cart.map((foodItem) => (
              <CartItem key={foodItem.id} data={foodItem} />
            ))}
          </div>
        </div>
      </main>
    </CartContext.Provider>
  );
};

export default Body;
