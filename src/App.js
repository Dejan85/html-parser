import React from "react";
import logo from "./logo.svg";
import "./App.css";
import htmlParser from "html-parser";
import { xad } from "./jsonFake";

function App() {
  var html = xad;
  htmlParser.parse(html, {
    openElement: function(name) {
      console.log("open: %s", name);
    },
    closeOpenedElement: function(name, token, unary) {
      console.log("token: %s, unary: %s", token, unary);
    },
    closeElement: function(name) {
      console.log("close: %s", name);
    },
    comment: function(value) {
      console.log("comment: %s", value);
    },
    cdata: function(value) {
      console.log("cdata: %s", value);
    },
    attribute: function(name, value) {
      console.log("attribute: %s=%s", name, value);
    },
    docType: function(value) {
      console.log("doctype: %s", value);
    },
    text: function(value) {
      console.log("text: %s", value);
    }
  });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
