import { useState } from "react";
import CartContext from "../utils/CartContext";
import { useContext } from "react";

const CartItem = (props) => {
  const { data } = props;
  const [quantity, setQuantity] = useState(data.quantity);

  const { cartDatas, setCart } = useContext(CartContext);

  //   console.log(cartDatas);

  const increment = () => {
    setQuantity(quantity + 1);
    const updateCart = cartDatas.map((el) => {
      if (el.id === data.id) {
        el.quantity = data.quantity + 1;
        // el.quantity = quantity;
        el.totalAmount = data.price * data.quantity;
      }
      return el;
    });
    setCart(updateCart);
    // console.log(updateCart);
  };
  const decrement = () => {
    setQuantity((pre) => (pre > 1 ? pre - 1 : 0));
    // setQuantity(quantity !== 0 ? quantity - 1 : 0);
    data.quantity = data.quantity > 1 ? data.quantity - 1 : 0;
    // data.totalAmount = data.price * data.quantity;
    // // const updateCart = cartDatas.filter(el=>el.id )
    if (data.quantity !== 0) {
      const updateCart = cartDatas.map((el) => {
        if (el.id === data.id) {
          el.quantity = data.quantity;
          el.totalAmount = data.price * data.quantity;
        }
        return el;
      });
      setCart(updateCart);
    } else {
      const updateCart = cartDatas.filter((el) => el.id !== data.id);
      setCart(updateCart);
    }
  };
  console.log(cartDatas);
  return (
    <div className="bg-[#d8e6e9] p-1.5 rounded-lg flex gap-2 items-center">
      <div className="w-[40px] drop-shadow-lg">
        <img
          className="h-[40px] w-full object-cover rounded-md"
          src={data.img}
        />
      </div>
      <div className="flex  justify-between w-full">
        <div>
          <h6 className="text-sm font-semibold">{data.name}</h6>
          <span className="text-xs font-bold">₹{data.totalAmount}</span>
        </div>
        <div>
          <h6 className="text-sm font-bold">Quantity</h6>
          {/* <span>{data.quantity}</span> */}
          <div className="">
            <span className="px-1 cursor-pointer" onClick={decrement}>
              -
            </span>
            <span className="px-1  ">{quantity}</span>
            <span className="px-1 cursor-pointer" onClick={increment}>
              +
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
