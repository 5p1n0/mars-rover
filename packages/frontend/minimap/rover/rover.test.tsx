import "jest-styled-components";

import React from "react";
import renderer from "react-test-renderer";
import { expect, test } from "vitest";

import { RoverStyle } from "./styles";

test("<RoverStyle />: snapshot test", () => {
  const roverStyle = renderer
    .create(<RoverStyle point={{ x: 1, y: 1 }} />)
    .toJSON();
  expect(roverStyle).toMatchInlineSnapshot(`
    .c0 {
      grid-row: 1;
      grid-column: 1;
      position: relative;
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
      -webkit-animation: iAjNNh 1s ease-in-out;
      animation: iAjNNh 1s ease-in-out;
    }

    .c0::before {
      content: "";
      position: absolute;
      top: 5%;
      left: 5%;
      width: 90%;
      height: 90%;
      background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='100' ry='100' stroke='%230B171EFF' stroke-width='4' stroke-dasharray='50%25%2c 15%25' stroke-dashoffset='86' stroke-linecap='butt'/%3e%3c/svg%3e");
      border-radius: 100px;
      -webkit-animation: dRXZbQ 4s linear infinite,iAjNNh 2s ease-in-out;
      animation: dRXZbQ 4s linear infinite,iAjNNh 2s ease-in-out;
    }

    @media (min-width:43rem) {
      .c0::before {
        background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='100' ry='100' stroke='%230B171EFF' stroke-width='6' stroke-dasharray='50%25%2c 15%25' stroke-dashoffset='86' stroke-linecap='butt'/%3e%3c/svg%3e");
      }
    }

    <div
      className="c0"
    />
  `);
});
