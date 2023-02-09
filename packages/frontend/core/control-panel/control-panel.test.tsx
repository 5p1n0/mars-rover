import "jest-styled-components";

import React from "react";
import renderer from "react-test-renderer";
import { expect, test } from "vitest";

import { ControlPanelStyle } from "./styles";

test("<ControlPanelStyle />: snapshot test", () => {
  const controlPanelStyle = renderer.create(<ControlPanelStyle />).toJSON();
  expect(controlPanelStyle).toMatchInlineSnapshot(`
    .c0 {
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      position: relative;
      min-height: 50rem;
      -webkit-flex-direction: column;
      -ms-flex-direction: column;
      flex-direction: column;
      -webkit-align-items: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      background-color: #6f7e9f;
      padding: 1rem;
      gap: 1.5rem;
      border: 1rem solid #21252e;
    }

    @media (min-width:43rem) {
      .c0 {
        padding: 2rem;
        gap: 3rem;
        border: 4rem solid #21252e;
      }
    }

    @media (min-width:62rem) {
      .c0 {
        -webkit-box-pack: space-around;
        -webkit-justify-content: space-around;
        -ms-flex-pack: space-around;
        justify-content: space-around;
        -webkit-flex-direction: row;
        -ms-flex-direction: row;
        flex-direction: row;
        padding: 2rem;
        border: 4rem solid #21252e;
      }
    }

    <div
      className="c0"
    />
  `);
});
