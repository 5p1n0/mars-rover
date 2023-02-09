import "jest-styled-components";

import React from "react";
import renderer from "react-test-renderer";
import { expect, test } from "vitest";

import { Lines } from "./index";

test("<Lines />: snapshot test", () => {
  const lines = renderer.create(<Lines />).toJSON();
  expect(lines).toMatchInlineSnapshot(`
    .c0 {
      display: none;
      width: 2.5rem;
      height: 4px;
      background: #21252e;
      margin-bottom: 6px;
    }

    @media (min-width:43rem) {
      .c0 {
        display: block;
        width: 3rem;
      }
    }

    <div>
      <span
        className="c0"
      />
      <span
        className="c0"
      />
      <span
        className="c0"
      />
    </div>
  `);
});
