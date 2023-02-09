import "jest-styled-components";

import { ForwardToggle } from "@mr/frontend-deck-forward-toggle";
import React from "react";
import renderer from "react-test-renderer";
import { expect, test } from "vitest";

test("<ForwardToggle />: snapshot test", () => {
  const forwardToggle = renderer.create(<ForwardToggle />).toJSON();
  expect(forwardToggle).toMatchInlineSnapshot(`
    .c0 {
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      -webkit-align-items: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      -webkit-flex-direction: column;
      -ms-flex-direction: column;
      flex-direction: column;
      -webkit-box-pack: space-around;
      -webkit-justify-content: space-around;
      -ms-flex-pack: space-around;
      justify-content: space-around;
      min-width: 3.5rem;
      min-height: 8rem;
      border: solid 0.5rem #21252e;
      border-radius: 0.25rem;
    }

    .c5 {
      display: none;
      width: 2.25rem;
      height: 1rem;
      border: solid 4px #21252e;
      background-color: #009999;
      -webkit-transition: background-color,box-shadow 100ms ease-in-out;
      transition: background-color,box-shadow 100ms ease-in-out;
    }

    .c2 {
      position: relative;
      width: 2rem;
      height: 3rem;
      margin: 0 auto 0.5rem;
      background: #21252e;
      cursor: pointer;
    }

    .c3 {
      position: absolute;
      left: 0.625rem;
      top: 35%;
      display: block;
      width: 0.75rem;
      height: 2.75rem;
      -webkit-transition: -webkit-transform 50ms ease;
      -webkit-transition: transform 50ms ease;
      transition: transform 50ms ease;
      background: linear-gradient(#20bbc2 80%,#015657 80% 100%);
    }

    .c1 {
      display: block;
      font-family: "VT323",monospace;
      font-size: 1.5rem;
      -webkit-transition: color 100ms ease-in-out;
      transition: color 100ms ease-in-out;
      color: #21252e;
    }

    .c4 {
      display: none;
      width: 2.5rem;
      height: 4px;
      background: #21252e;
      margin-bottom: 6px;
    }

    @media (min-width:43rem) {
      .c0 {
        border: solid 0.8rem #21252e;
        min-width: 5rem;
        min-height: 18rem;
      }
    }

    @media (min-width:62rem) {
      .c0 {
        border: solid 0.8rem #21252e;
      }
    }

    @media (min-width:43rem) {
      .c5 {
        display: block;
        width: 3rem;
      }
    }

    @media (min-width:43rem) {
      .c2 {
        margin: 1.75rem auto;
        width: 3rem;
        height: 6rem;
      }
    }

    @media (min-width:43rem) {
      .c3 {
        left: 0.9rem;
        width: 1.2rem;
        height: 6rem;
      }
    }

    @media (min-width:43rem) {
      .c1 {
        font-size: 2rem;
      }
    }

    @media (min-width:43rem) {
      .c4 {
        display: block;
        width: 3rem;
      }
    }

    <div
      className="c0"
    >
      <span
        className="c1"
      >
        F
      </span>
      <div
        className="c2"
        onClick={[Function]}
      >
        <span
          className="c3"
        />
      </div>
      <div>
        <span
          className="c4"
        />
        <span
          className="c4"
        />
        <span
          className="c4"
        />
      </div>
      <span
        className="c5"
      />
    </div>
  `);
});
