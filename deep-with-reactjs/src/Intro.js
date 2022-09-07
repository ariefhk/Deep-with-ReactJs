import React from "react";
import logo from "./logo.svg";
import "./App.css";

const Intro = () => {
  return (
    <div className="App">
      <div className="content">
        <img src={logo} className="App-logo" alt="logo" />

        <p className="text">
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </p>
        <p className="name">Arief Rachman Hakim</p>
      </div>
    </div>
  );
};

export default Intro;
