import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Learn from "./components/Hello";
import Belajar from "./components/Belajar";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Belajar></Belajar>
        <Learn></Learn>
        <Learn name="Apple" weight="50gm"></Learn>
        <Learn name="Mango" weight="70gm"></Learn>

        <Belajar></Belajar>
      </header>
    </div>
  );
}

export default App;
