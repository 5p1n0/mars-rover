import "jest-styled-components";

import React from "react";
import renderer from "react-test-renderer";
import { describe, expect, test } from "vitest";

import { HudStyle, MinimapStyle } from "./styles";

describe("<MinimapStyle /> & <HudStyle />: snapshot tests", () => {
  test("<MinimapStyle />", () => {
    const minimapStyle = renderer.create(<MinimapStyle />).toJSON();
    expect(minimapStyle).toMatchInlineSnapshot(`
      .c0 {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-align-items: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        position: relative;
        -webkit-box-pack: center;
        -webkit-justify-content: center;
        -ms-flex-pack: center;
        justify-content: center;
        background-color: #4b597c;
        border-radius: 0.5rem;
        padding: 0.5rem;
      }

      @media (min-width:43rem) {
        .c0 {
          padding: 1rem;
        }
      }

      @media (min-width:62rem) {
        .c0 {
          padding: 2rem;
        }
      }

      <div
        className="c0"
      />
    `);
  });

  test("<HudStyle />", () => {
    const hudStyle = renderer.create(<HudStyle />).toJSON();
    expect(hudStyle).toMatchInlineSnapshot(`
      .c0 {
        position: relative;
        display: grid;
        grid-auto-flow: dense;
        grid: repeat(6,12%) / repeat(6,12%);
        -webkit-box-pack: center;
        -webkit-justify-content: center;
        -ms-flex-pack: center;
        justify-content: center;
        -webkit-align-content: center;
        -ms-flex-line-pack: center;
        align-content: center;
        background-color: red;
        height: 70vw;
        width: 70vw;
        overflow: hidden;
        border-radius: 50%;
        border: 0.5rem solid #21252e;
      }

      @media (min-width:43rem) {
        .c0 {
          height: 55vw;
          width: 55vw;
          border: 1rem solid #21252e;
        }
      }

      @media (min-width:62rem) {
        .c0 {
          height: 35vw;
          width: 35vw;
          border: 2rem solid #21252e;
        }
      }

      <span
        className="c0"
      />
    `);
  });
});
