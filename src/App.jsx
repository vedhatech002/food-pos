import { useState } from "react";

import Header from "./components/Header";
import Body from "./components/Body";

function App() {
  const [searchQuery, setSearchQuery] = useState(null);

  const handleInput = (e) => {
    setSearchQuery(e.target.value);
  };
  console.log();
  return (
    <>
      <Header handleSearch={handleInput} />
      <Body searchQuery={searchQuery} />
    </>
  );
}

export default App;
