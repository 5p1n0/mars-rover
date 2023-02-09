import "jest-styled-components";

import React from "react";
import renderer from "react-test-renderer";
import { expect, test } from "vitest";

import { ObstacleIcon } from "./index";

test("<ObstacleIcon />: snapshot test", () => {
  const obstacles = renderer
    .create(<ObstacleIcon obstacle={{ x: 1, y: 1 }} />)
    .toJSON();
  expect(obstacles).toMatchInlineSnapshot(`
    .c0 {
      grid-row: 1;
      grid-column: 1;
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-pack: center;
      -webkit-justify-content: center;
      -ms-flex-pack: center;
      justify-content: center;
      -webkit-align-items: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      -webkit-animation: iAjNNh 150ms ease-in;
      animation: iAjNNh 150ms ease-in;
    }

    .c1 {
      width: 75%;
      height: 75%;
      border: 1px solid black;
      box-shadow: 0 0 0 1px red inset;
      background: repeating-linear-gradient( -45deg, #0b171e, #0b171e 2px, transparent 1px, transparent 6px );
    }

    @media (min-width:43rem) {
      .c1 {
        width: 75%;
        height: 75%;
        border: 2px solid black;
        box-shadow: 0 0 0 2px red inset;
        background: repeating-linear-gradient( -45deg, #0b171e, #0b171e 4px, transparent 4px, transparent 12px );
      }
    }

    <div
      className="c0"
    >
      <span
        className="c1"
      />
    </div>
  `);
});
