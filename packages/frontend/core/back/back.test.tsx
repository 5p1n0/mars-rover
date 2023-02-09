import "jest-styled-components";

import React from "react";
import renderer from "react-test-renderer";
import { expect, test } from "vitest";

import { Back } from "./index";

test("<Back />: snapshot test", () => {
  const back = renderer.create(<Back />).toJSON();
  expect(back).toMatchInlineSnapshot(`
    .c0 {
      margin-top: 15%;
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      -webkit-flex-direction: column;
      -ms-flex-direction: column;
      flex-direction: column;
      -webkit-align-items: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
    }

    .c1 {
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      -webkit-align-items: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      margin-bottom: 4rem;
    }

    .c2 {
      color: #e7612e;
      font-family: "Orbitron",sans-serif;
      text-shadow: red 1px 0 10px;
      font-size: 2rem;
      text-align: center;
    }

    .c4 {
      color: #e7612e;
      font-family: "Space Grotesk",sans-serif;
      text-shadow: red 1px 0 10px;
      font-size: 1.25rem;
      text-align: center;
    }

    .c3 {
      display: block;
      margin: 0 1rem;
      width: 2px;
      height: 3.5rem;
      background-color: #e7612e;
    }

    .c5 {
      color: #e7612e;
      border: 2px solid #e7612e;
      text-shadow: red 1px 0 10px;
      border-radius: 0.75rem;
      width: 12rem;
      height: 4.5rem;
      font-family: "Space Grotesk",sans-serif;
      font-size: 1rem;
      text-align: center;
      background-color: black;
      -webkit-transition: background-color color 50ms ease;
      transition: background-color color 50ms ease;
      cursor: pointer;
    }

    .c5:hover {
      text-shadow: none;
      background-color: #e7612e;
      color: black;
    }

    @media (min-width:43rem) {
      .c2 {
        font-size: 2.5rem;
      }
    }

    @media (min-width:43rem) {
      .c4 {
        font-size: 1.5rem;
      }
    }

    @media (min-width:43rem) {
      .c3 {
        width: 4px;
        margin: 0 2rem;
      }
    }

    @media (min-width:43rem) {
      .c5 {
        font-size: 1.25rem;
        height: 5.5rem;
        width: 15rem;
      }
    }

    <section
      className="c0"
    >
      <section
        className="c1"
      >
        <span
          className="c2"
        >
          404
        </span>
        <span
          className="c3"
        />
        <span
          className="c4"
        >
          Page Not Found
        </span>
      </section>
      <a
        href="/"
      >
        <button
          aria-label="to_homepage"
          className="c5"
        >
          Back to homepage
        </button>
      </a>
    </section>
  `);
});
