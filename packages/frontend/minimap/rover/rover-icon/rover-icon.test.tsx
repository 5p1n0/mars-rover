import "jest-styled-components";

import { Orientation } from "@mr/common-types";
import React from "react";
import renderer from "react-test-renderer";
import { expect, test } from "vitest";

import { RoverIconStyle } from "./styles";

test("<RoverIconStyle />: snapshot test", () => {
  const roverIconStyle = renderer
    .create(<RoverIconStyle orientation={Orientation.N} />)
    .toJSON();
  expect(roverIconStyle).toMatchInlineSnapshot(`
    .c0 {
      width: 12px;
      height: 12px;
      -webkit-transform: rotate(0deg);
      -ms-transform: rotate(0deg);
      transform: rotate(0deg);
      -webkit-animation: iAjNNh 2s ease-in-out;
      animation: iAjNNh 2s ease-in-out;
    }

    @media (min-width:43rem) {
      .c0 {
        width: 24px;
        height: 24px;
      }
    }

    <svg
      className="c0"
      fill="none"
      height={24}
      orientation="north"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
      width={24}
      xmlns="http://www.w3.org/2000/svg"
    >
      <polygon
        points="12 2 19 21 12 17 5 21 12 2"
      />
    </svg>
  `);
});
