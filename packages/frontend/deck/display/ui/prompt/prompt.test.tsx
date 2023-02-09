import "jest-styled-components";

import React from "react";
import renderer from "react-test-renderer";
import { describe, expect, test } from "vitest";

import { Prompt } from "./index";
import { AlertStyle, PromptStyle } from "./styles";

describe("<Prompt /> & <PromptStyle /> <AlertStyle />: snapshot tests", () => {
  test("<Prompt />", () => {
    const prompt = renderer.create(<Prompt />).toJSON();
    expect(prompt).toMatchInlineSnapshot(`
      .c0 {
        display: block;
        -webkit-flex: 0 1;
        -ms-flex: 0 1;
        flex: 0 1;
        -webkit-flex-basis: 90%;
        -ms-flex-preferred-size: 90%;
        flex-basis: 90%;
        -webkit-align-self: start;
        -ms-flex-item-align: start;
        align-self: start;
        text-align: left;
        color: white;
        font-family: "VT323",monospace;
        font-size: 1.5rem;
      }

      @media (min-width:43rem) {
        .c0 {
          font-size: 1.75rem;
          -webkit-flex-basis: 65%;
          -ms-flex-preferred-size: 65%;
          flex-basis: 65%;
        }
      }

      @media (min-width:62rem) {
        .c0 {
          font-size: 1.875rem;
          -webkit-flex-basis: 65%;
          -ms-flex-preferred-size: 65%;
          flex-basis: 65%;
        }
      }

      <span
        className="c0"
      >
        Error: No server connection
      </span>
    `);
  });

  test("<PromptStyle />", () => {
    const promptStyle = renderer.create(<PromptStyle basis={70} />).toJSON();
    expect(promptStyle).toMatchInlineSnapshot(`
      .c0 {
        display: block;
        -webkit-flex: 0 1;
        -ms-flex: 0 1;
        flex: 0 1;
        -webkit-flex-basis: 70%;
        -ms-flex-preferred-size: 70%;
        flex-basis: 70%;
        -webkit-align-self: start;
        -ms-flex-item-align: start;
        align-self: start;
        text-align: left;
        color: white;
        font-family: "VT323",monospace;
        font-size: 1.5rem;
      }

      @media (min-width:43rem) {
        .c0 {
          font-size: 1.75rem;
          -webkit-flex-basis: 65%;
          -ms-flex-preferred-size: 65%;
          flex-basis: 65%;
        }
      }

      @media (min-width:62rem) {
        .c0 {
          font-size: 1.875rem;
          -webkit-flex-basis: 65%;
          -ms-flex-preferred-size: 65%;
          flex-basis: 65%;
        }
      }

      <span
        className="c0"
      />
    `);
  });

  test("<AlertStyle />", () => {
    const alert = renderer.create(<AlertStyle />).toJSON();
    expect(alert).toMatchInlineSnapshot(`
      .c0 {
        color: white;
        font-family: "VT323",monospace;
        font-size: 1.375rem;
      }

      @media (min-width:43rem) {
        .c0 {
          font-size: 1.75rem;
        }
      }

      @media (min-width:62rem) {
        .c0 {
          font-size: 1.875rem;
        }
      }

      <span
        className="c0"
      />
    `);
  });
});
