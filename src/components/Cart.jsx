import { useContext } from "react";
import CartContext from "../utils/CartContext";
import CartItem from "./CartItem";

const Cart = () => {
  const { cartDatas } = useContext(CartContext);

  const totalPrice =
    cartDatas.length !== 0
      ? cartDatas.reduce((a, b) => {
          return a + Number(b.totalAmount);
        }, 0)
      : 0;
  console.log(totalPrice);
  return (
    <div className="border-l-[1.5px] border-gray-200 h-[89vh] relative">
      <h1 className="text-xl font-semibold mx-2 py-3 border-b-[1.5px]">
        Cart Items
      </h1>
      {/* products cart area */}
      <div className="mx-2 py-3 space-y-3 h-[60vh] overflow-y-auto">
        {cartDatas.length === 0 ? (
          <div className="py-10">
            <img
              className="w-[200px] mx-auto"
              src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/2xempty_cart_yfxml0"
            />
            <h5 className="text-center mt-3 text-sm font-medium">
              Cart is empty
            </h5>
          </div>
        ) : (
          cartDatas.map((foodItem) => (
            <CartItem key={foodItem.id} data={foodItem} />
          ))
        )}
      </div>
      <div className="bg-slate mx-2 border border-gray-300  rounded-md ">
        <div className="px-4 py-2 flex items-center justify-between">
          <h3 className="font-semibold text-lg">Total</h3>
          <span className="font-semibold text-sm">₹{totalPrice}</span>
        </div>
        <div className="px-4 py-3">
          <button className="bg-[#d8e6e9] px-6 py-2 w-full rounded-md font-semibold drop-shadow-sm">
            Create Bill
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
