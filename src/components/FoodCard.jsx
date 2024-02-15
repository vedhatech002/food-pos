import { useState } from "react";

const FoodCard = (props) => {
  const { product, addProductToCart } = props;

  const [onHover, setOnHover] = useState(false);
  const showBtn = () => {
    setOnHover(true);
  };
  const hideBtn = () => {
    setOnHover(false);
  };
  return (
    <div
      className="w-[200px] drop-shadow-xl relative "
      onMouseOver={showBtn}
      onMouseOut={hideBtn}
    >
      {onHover && (
        <div className="absolute bg-[#222521a6] w-full h-[160px] rounded-tr-lg rounded-tl-lg ">
          <button
            className="bg-[#d89f65] px-6 py-1 font-medium text-lg rounded-md mx-16 my-14"
            onClick={() => {
              addProductToCart(product);
            }}
          >
            Add
          </button>
        </div>
      )}
      <img
        className="h-[160px] w-full rounded-tr-lg rounded-tl-lg object cover"
        src={product.img}
      />
      <div className="bg-[#d8e6e9] rounded-br-lg rounded-bl-lg">
        <h4 className="text-lg font-bold py-1 text-center">{product.name}</h4>
        <div className="text-sm px-2 pt-2 pb-3 flex justify-between ">
          <span className="font-semibold">{product.category}</span>
          <span className="font-medium">₹{product.price}</span>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
