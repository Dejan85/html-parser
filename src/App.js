import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import htmlParser from "html-parser";
import { xad } from "./jsonFake";
import { parse } from "node-html-parser";

// ovo je prvi
// https://www.npmjs.com/package/html-parser

// ovo je drugi
// https://www.npmjs.com/package/node-html-parser

function App() {
  const [test, setTest] = useState();
  const arr = [];

  const html = xad;
  const html2 = xad;

  // ovo je node-parser
  const root = parse(html2);

  useEffect(() => {
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
        if (name === "data-href") {
          arr.push(value);
        }
      }
      // docType: function(value) {
      //   console.log("doctype: %s", value);
      // },
      // text: function(value) {
      //   console.log("text: %s", value);
      // }
    });

    setTest(arr);
  }, []);

  useEffect(() => {
    // console.log(test);
  }, [test]);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{root && root.rawText}</p>
        <a
          className="App-link"
          href="http://www.teletrader.com/foxconn-makes-masks-in…tart-lines-in-china-report/news/details/51189710"
          // href="http://www.teletrader.com/hyundai-kia-at-risk-of-heavy-output-losses-due-to-coronavirus/news/details/51197299"
        >
          Learn React
        </a>

        {test &&
          test.map((item, index) => {
            return (
              <a key={index} href={item}>
                link
              </a>
            );
          })}
      </header>
    </div>
  );
}

export default App;
