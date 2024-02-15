const Header = ({ handleSearch }) => {
  return (
    <header className=" px-6 py-4 border-b border-gray-200 shadow-sm fixed w-full bg-white z-10 font-poppins flex items-center justify-between">
      <h1 className="text-2xl font-bold text-slate-800 drop-shadow-md">
        Restro Pos
      </h1>
      <div className="relative">
        <input
          type="text"
          placeholder="search for food"
          className="bg-[#d8e6e9] py-1.5 px-4 rounded-md outline-none"
          onKeyUp={(e) => {
            if (e.key === "Enter") {
              handleSearch(e);
            }
          }}
        />
      </div>
      <div>
        <a target="_blank" href="https://github.com/vedhatech002/food-pos">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            width="28"
          >
            <path d="M7.999 0C3.582 0 0 3.596 0 8.032a8.031 8.031 0 005.472 7.621c.4.074.546-.174.546-.387 0-.191-.007-.696-.011-1.366-2.225.485-2.695-1.077-2.695-1.077-.363-.928-.888-1.175-.888-1.175-.727-.498.054-.488.054-.488.803.057 1.225.828 1.225.828.714 1.227 1.873.873 2.329.667.072-.519.279-.873.508-1.074-1.776-.203-3.644-.892-3.644-3.969 0-.877.312-1.594.824-2.156-.083-.203-.357-1.02.078-2.125 0 0 .672-.216 2.2.823a7.633 7.633 0 012.003-.27 7.65 7.65 0 012.003.271c1.527-1.039 2.198-.823 2.198-.823.436 1.106.162 1.922.08 2.125.513.562.822 1.279.822 2.156 0 3.085-1.87 3.764-3.652 3.963.287.248.543.738.543 1.487 0 1.074-.01 1.94-.01 2.203 0 .215.144.465.55.386A8.032 8.032 0 0016 8.032C16 3.596 12.418 0 7.999 0z"></path>
          </svg>
        </a>
      </div>
    </header>
  );
};

export default Header;
