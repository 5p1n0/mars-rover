import "jest-styled-components";

import React from "react";
import renderer from "react-test-renderer";
import { expect, test } from "vitest";

import { KnobPanel } from "./index";

test("<KnobPanel />: snapshot test", () => {
  const knobPanel = renderer.create(<KnobPanel />).toJSON();
  expect(knobPanel).toMatchInlineSnapshot(`
    .c0 {
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      margin-left: 25%;
      margin-right: 25%;
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
      height: 11rem;
      width: 11rem;
    }

    .c1 {
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

    .c2 {
      display: block;
      width: 0.75rem;
      height: 1.75rem;
      border: 0.375rem solid #21252e;
      top: -0.5rem;
      background-color: #e4e4f0;
      position: relative;
      z-index: 1;
    }

    .c9 {
      width: 0.625rem;
      height: 0.625rem;
      border-radius: 50%;
      background-color: white;
      position: absolute;
    }

    .c11 {
      top: 1rem;
      left: calc(100% - 1.5rem);
    }

    .c10 {
      top: 1rem;
      right: calc(100% - 1.5rem);
    }

    .c13 {
      bottom: 1rem;
      left: calc(100% - 1.5rem);
    }

    .c12 {
      bottom: 1rem;
      right: calc(100% - 1.5rem);
    }

    .c3 {
      display: block;
      font-family: "VT323",monospace;
      font-size: 1.5rem;
      -webkit-transition: color 100ms ease-in-out;
      transition: color 100ms ease-in-out;
      color: #e4e4f0;
    }

    .c5 {
      display: block;
      font-family: "VT323",monospace;
      font-size: 1.5rem;
      -webkit-transition: color 100ms ease-in-out;
      transition: color 100ms ease-in-out;
      color: #21252e;
    }

    .c4 {
      position: absolute;
      -webkit-align-self: start;
      -ms-flex-item-align: start;
      align-self: start;
      top: 0.5rem;
    }

    .c7 {
      position: absolute;
      -webkit-align-self: end;
      -ms-flex-item-align: end;
      align-self: end;
      bottom: 0.5rem;
    }

    .c6 {
      position: relative;
      -webkit-order: 3;
      -ms-flex-order: 3;
      order: 3;
      margin-right: 1rem;
      margin-left: auto;
    }

    .c8 {
      position: relative;
      -webkit-order: 1;
      -ms-flex-order: 1;
      order: 1;
      margin-right: auto;
      margin-left: 1rem;
    }

    @media (min-width:43rem) {
      .c0 {
        height: 15rem;
        width: 15rem;
      }
    }

    @media (min-width:63rem) {
      .c0 {
        margin-left: 0;
        margin-right: 0;
      }
    }

    @media (min-width:43rem) {
      .c1 {
        width: 100%;
        height: 100%;
      }
    }

    @media (min-width:43rem) {
      .c2 {
        width: 0.875rem;
        height: 2.5rem;
        border: 0.5rem solid #21252e;
        top: -1rem;
      }
    }

    @media (min-width:43rem) {
      .c9 {
        width: 1rem;
        height: 1rem;
      }
    }

    @media (min-width:62rem) {
      .c9 {
        width: 1rem;
        height: 1rem;
      }
    }

    @media (min-width:43rem) {
      .c3 {
        font-size: 2rem;
      }
    }

    @media (min-width:43rem) {
      .c5 {
        font-size: 2rem;
      }
    }

    <div
      className="c0"
    >
      <div
        aria-labelledby="knob"
        aria-valuemax={3}
        aria-valuemin={0}
        aria-valuenow={0}
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
          className="c1"
          onClick={[Function]}
        >
          <span
            className="c2"
          />
        </div>
      </div>
      <span
        className="c3 c4"
        selected={true}
      >
        N
      </span>
      <span
        className="c5 c6"
        selected={false}
      >
        E
      </span>
      <span
        className="c5 c7"
        selected={false}
      >
        S
      </span>
      <span
        className="c5 c8"
        selected={false}
      >
        W
      </span>
      <div
        className="c9 c10"
      />
      <div
        className="c9 c11"
      />
      <div
        className="c9 c12"
      />
      <div
        className="c9 c13"
      />
    </div>
  `);
});
