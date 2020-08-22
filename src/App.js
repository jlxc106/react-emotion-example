import React, { useState } from "react";
/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { ThemeProvider } from "emotion-theming";

import "./App.css";
import Button from "./styledItems/button";


// styled
// composition
// media queries

function App() {
  const [toBe, setToBe] = useState(false);
  const breakpoints = [576, 768, 992, 1200];

  const mq = breakpoints.map((bp) => `@media (min-width: ${bp}px)`);

  const theme = {
    colors: {
      primary: "hotpink",
      secondary: "green",
    },
  };

  return (
    <ThemeProvider theme={theme}>
      {/* Object */}
      <div
        className="App"
        css={(theme) => ({
          padding: "10px",
          border: `1px solid ${theme.colors.primary}`,
        })}
      >
        {/* string */}
        <p
          css={css`
            padding: 32px;
            background-color: ${theme.colors.primary};
            font-size: 24px;
            border-radius: 5px;
            &:hover {
              color: ${toBe ? theme.colors.secondary : "black"};
            }
            ${mq[0]} {
              color: gray;
            }
            ${mq[1]} {
              color: white;
            }
          `}
        >
          Emotions are just a part of life.
        </p>
        <Button
          // override default color
          css={css`
            color: ${theme.colors.secondary};
          `}
          onClick={() => {
            setToBe(true);
          }}
          children="Set To Be"
        >
          {/* Set To Be */}
        </Button>
      </div>
    </ThemeProvider>
  );
}

export default App;
