import "jest-styled-components";

import React from "react";
import renderer from "react-test-renderer";
import { expect, test } from "vitest";

import { Area } from "./index";

test("<Area />: snapshot test", () => {
  const area = renderer.create(<Area />).toJSON();
  expect(area).toMatchInlineSnapshot(`
    .c0 {
      position: relative;
    }

    .c1 {
      position: absolute;
      top: -3px;
      left: -3px;
    }

    .c3 {
      position: absolute;
      top: calc(100% - 3px);
      left: -3px;
    }

    .c2 {
      position: absolute;
      top: -3px;
      left: calc(100% - 3px);
    }

    .c4 {
      position: absolute;
      top: calc(100% - 3px);
      left: calc(100% - 3px);
    }

    <span
      className="c0"
    >
      <svg
        className="c1"
        fill="none"
        height={6}
        stroke="#0b171e"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        viewBox="0 0 24 24"
        width={6}
        xmlns="http://www.w3.org/2000/svg"
      >
        <line
          x1="12"
          x2="12"
          y1="5"
          y2="19"
        />
        <line
          x1="5"
          x2="19"
          y1="12"
          y2="12"
        />
      </svg>
      <svg
        className="c2"
        fill="none"
        height={6}
        stroke="#0b171e"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        viewBox="0 0 24 24"
        width={6}
        xmlns="http://www.w3.org/2000/svg"
      >
        <line
          x1="12"
          x2="12"
          y1="5"
          y2="19"
        />
        <line
          x1="5"
          x2="19"
          y1="12"
          y2="12"
        />
      </svg>
      <svg
        className="c3"
        fill="none"
        height={6}
        stroke="#0b171e"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        viewBox="0 0 24 24"
        width={6}
        xmlns="http://www.w3.org/2000/svg"
      >
        <line
          x1="12"
          x2="12"
          y1="5"
          y2="19"
        />
        <line
          x1="5"
          x2="19"
          y1="12"
          y2="12"
        />
      </svg>
      <svg
        className="c4"
        fill="none"
        height={6}
        stroke="#0b171e"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        viewBox="0 0 24 24"
        width={6}
        xmlns="http://www.w3.org/2000/svg"
      >
        <line
          x1="12"
          x2="12"
          y1="5"
          y2="19"
        />
        <line
          x1="5"
          x2="19"
          y1="12"
          y2="12"
        />
      </svg>
    </span>
  `);
});
