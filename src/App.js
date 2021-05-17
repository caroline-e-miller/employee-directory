import React from "react";
import Navbar from "./components/Navbar/Nav";
import Wrapper from "./components/Wrapper/Wrapper"
import Main from "./components/Main";
import 'bootstrap/dist/css/bootstrap.min.css';

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
