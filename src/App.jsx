import Header from "./Component/Header";
import Navbar from "./Component/Navbar";
import "./index.css"
import axios from "axios"
import React, { useState } from "react";

function App() {
  const[val , setval] = useState("");
  return (
    <div className="app">
      {/* <Navbar val={val} setval={setval}/> */}
      <Header val={val}/>
    </div>
  );
}

export default App;
