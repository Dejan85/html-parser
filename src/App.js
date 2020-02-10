import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import htmlParser from "html-parser";
import { xad } from "./jsonFake";

// https://www.npmjs.com/package/html-parser

// console.log(JSON.parse(xad));

const reg = `https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)`;

function App() {
  const [test, setTest] = useState();

  var html = xad;
  htmlParser.parse(html, {
    // openElement: function(name) {
    //   console.log("open: %s", name);
    // },
    // closeOpenedElement: function(name, token, unary) {
    //   console.log("token: %s, unary: %s", token, unary);
    // },
    // closeElement: function(name) {
    //   console.log("close: %s", name);
    // },
    // comment: function(value) {
    //   console.log("comment: %s", value);
    // },
    // cdata: function(value) {
    //   console.log("cdata: %s", value);
    // },
    attribute: function(name, value) {
      // console.log("attribute: %s=%s", name, value);
      // console.log(value.match(reg));
      if (name === "data-href") {
        console.log(value);
      }
    }
    // docType: function(value) {
    //   console.log("doctype: %s", value);
    // },
    // text: function(value) {
    //   console.log("text: %s", value);
    // }
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
