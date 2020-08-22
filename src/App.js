import React, { useState } from "react";
/** @jsx jsx */
import { css, jsx } from "@emotion/core";

import logo from "./logo.svg";
import "./App.css";
import Button from "./styledItems/button";

const color = "green";

function App() {
  const [toBe, setToBe] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Button
          onClick={() => {
            console.log("setToBe iz true");
            setToBe(true);
          }}
        >
          Set To Be
        </Button>
        <p
          css={css`
            padding: 32px;
            background-color: hotpink;
            font-size: 24px;
            border-radius: 4px;
            &:hover {
              color: ${toBe ? color : "black"};
            }
          `}
        >
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
