import "jest-styled-components";

import React from "react";
import renderer from "react-test-renderer";
import { expect, test } from "vitest";

import { CustomKnob } from "./index";

test("<CustomKnob />: snapshot test", () => {
  const customKnob = renderer.create(<CustomKnob />).toJSON();
  expect(customKnob).toMatchInlineSnapshot(`
    .c0 {
      position: relative;
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-pack: center;
      -webkit-justify-content: center;
      -ms-flex-pack: center;
      justify-content: center;
      -webkit-align-items: start;
      -webkit-box-align: start;
      -ms-flex-align: start;
      align-items: start;
      z-index: 0;
      width: 5rem;
      height: 5rem;
      border-radius: 50%;
      background-color: #21252e;
      -webkit-transition: -webkit-transform 200ms ease-in-out;
      -webkit-transition: transform 200ms ease-in-out;
      transition: transform 200ms ease-in-out;
      -webkit-transform: rotate(0deg);
      -ms-transform: rotate(0deg);
      transform: rotate(0deg);
    }

    .c1 {
      display: block;
      width: 0.75rem;
      height: 1.75rem;
      border: 0.375rem solid #21252e;
      top: -0.5rem;
      background-color: #e4e4f0;
      position: relative;
      z-index: 1;
    }

    @media (min-width:43rem) {
      .c0 {
        width: 100%;
        height: 100%;
      }
    }

    @media (min-width:43rem) {
      .c1 {
        width: 0.875rem;
        height: 2.5rem;
        border: 0.5rem solid #21252e;
        top: -1rem;
      }
    }

    <div
      aria-labelledby="knob"
      aria-valuemax={3}
      aria-valuemin={0}
      onBlur={[Function]}
      onFocus={[Function]}
      onKeyDown={[Function]}
      onMouseDown={[Function]}
      onTouchStart={[Function]}
      style={
        {
          "alignItems": "center",
          "borderRadius": "60px",
          "boxSizing": "border-box",
          "cursor": "pointer",
          "display": "flex",
          "height": "120px",
          "justifyContent": "center",
          "order": 2,
          "outline": "none",
          "overflow": "visible",
          "position": "relative",
          "width": "120px",
        }
      }
      tabIndex={0}
    >
      <div
        className="c0"
        onClick={[Function]}
      >
        <span
          className="c1"
        />
      </div>
    </div>
  `);
});
