import React from "react";
import SearchResults from "./components/SearchResults";
import Navbar from "./components/Navbar/Nav";
import Wrapper from "./components/Wrapper/Wrapper"

function App() {
  return (
    <div>
      <Navbar />
      <Wrapper>
        <SearchResults />
      </Wrapper>
    </div>
  );
}

export default App;
