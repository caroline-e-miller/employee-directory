import React from "react";
import SearchResults from "./components/SearchResults";
import Navbar from "./components/Navbar/Nav";
import Wrapper from "./components/Wrapper/Wrapper"
import Main from "./components/Main";

function App() {
  return (
    <div>
      <Navbar />
      <Wrapper>
        <Main />
      </Wrapper>
    </div>
  );
}

export default App;
