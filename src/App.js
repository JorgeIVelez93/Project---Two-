import "./App.css";
import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Opening from "./components/Opening";
import About from "./components/About";
import Contact from "./components/Contact";
import Coin from "./components/Coin";
import CreateAcc from "./components/CreateAcc";
import Fund from "./components/Fund";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Opening />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/coin/:uuid" element={<Coin />} />
        <Route path="/createacc" element={<CreateAcc />} />
        <Route path="/fund" element={<Fund />} />
      </Routes>
    </div>
  );
}

export default App;
