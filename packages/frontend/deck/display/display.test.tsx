import "jest-styled-components";

import React from "react";
import renderer from "react-test-renderer";
import { describe, expect, test } from "vitest";

import { Display } from "./index";
import { DisplayStyle } from "./styles";

describe("<Display />: snapshot tests", () => {
  test("<Display />", () => {
    const display = renderer.create(<Display />).toJSON();
    expect(display).toMatchInlineSnapshot(`
      .c0 {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-align-content: center;
        -ms-flex-line-pack: center;
        align-content: center;
        -webkit-box-pack: justify;
        -webkit-justify-content: space-between;
        -ms-flex-pack: justify;
        justify-content: space-between;
        padding: 0.5rem;
        -webkit-flex-wrap: nowrap;
        -ms-flex-wrap: nowrap;
        flex-wrap: nowrap;
        -webkit-flex-basis: 100%;
        -ms-flex-preferred-size: 100%;
        flex-basis: 100%;
        border: solid 0.5rem #21252e;
        border-radius: 0.25rem;
        -webkit-clip-path: polygon( 2% 0, 98% 0, 100% 10%, 100% 90%, 98% 100%, 2% 100%, 0 90%, 0 10% );
        clip-path: polygon( 2% 0, 98% 0, 100% 10%, 100% 90%, 98% 100%, 2% 100%, 0 90%, 0 10% );
        background: repeating-linear-gradient( #910f325f 6px, #910f325f 9px, transparent 9px, transparent 22px ), repeating-linear-gradient( to right, #910f325f 6px, #910f325f 9px, transparent 9px, transparent 22px ), #ff0000;
        -webkit-transition: background-color 500ms ease-in-out;
        transition: background-color 500ms ease-in-out;
        height: 4.5rem;
      }

      .c1 {
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
          border: solid 1rem #21252e;
          -webkit-flex-basis: 80%;
          -ms-flex-preferred-size: 80%;
          flex-basis: 80%;
          padding: 1rem;
        }
      }

      @media (min-width:62rem) {
        .c0 {
          height: 6rem;
          border: solid 1.125rem #21252e;
          -webkit-flex-basis: 80%;
          -ms-flex-preferred-size: 80%;
          flex-basis: 80%;
          padding: 1rem;
        }
      }

      @media (min-width:43rem) {
        .c1 {
          font-size: 1.75rem;
          -webkit-flex-basis: 65%;
          -ms-flex-preferred-size: 65%;
          flex-basis: 65%;
        }
      }

      @media (min-width:62rem) {
        .c1 {
          font-size: 1.875rem;
          -webkit-flex-basis: 65%;
          -ms-flex-preferred-size: 65%;
          flex-basis: 65%;
        }
      }

      <div
        className="c0"
      >
        <span
          className="c1"
        >
          Error: No server connection
        </span>
      </div>
    `);
  });

  test("<DisplayStyle />", () => {
    const displayStyle = renderer
      .create(<DisplayStyle warning={false} victory={false} />)
      .toJSON();
    expect(displayStyle).toMatchInlineSnapshot(`
      .c0 {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-align-content: center;
        -ms-flex-line-pack: center;
        align-content: center;
        -webkit-box-pack: justify;
        -webkit-justify-content: space-between;
        -ms-flex-pack: justify;
        justify-content: space-between;
        padding: 0.5rem;
        -webkit-flex-wrap: nowrap;
        -ms-flex-wrap: nowrap;
        flex-wrap: nowrap;
        -webkit-flex-basis: 100%;
        -ms-flex-preferred-size: 100%;
        flex-basis: 100%;
        border: solid 0.5rem #21252e;
        border-radius: 0.25rem;
        -webkit-clip-path: polygon( 2% 0, 98% 0, 100% 10%, 100% 90%, 98% 100%, 2% 100%, 0 90%, 0 10% );
        clip-path: polygon( 2% 0, 98% 0, 100% 10%, 100% 90%, 98% 100%, 2% 100%, 0 90%, 0 10% );
        background: repeating-linear-gradient( #91220f5f 6px, #91220f5f 9px, transparent 9px, transparent 22px ), repeating-linear-gradient( to right, #91220f5f 6px, #91220f5f 9px, transparent 9px, transparent 22px ), #e7612e;
        -webkit-transition: background-color 500ms ease-in-out;
        transition: background-color 500ms ease-in-out;
        height: 4.5rem;
      }

      @media (min-width:43rem) {
        .c0 {
          border: solid 1rem #21252e;
          -webkit-flex-basis: 80%;
          -ms-flex-preferred-size: 80%;
          flex-basis: 80%;
          padding: 1rem;
        }
      }

      @media (min-width:62rem) {
        .c0 {
          height: 6rem;
          border: solid 1.125rem #21252e;
          -webkit-flex-basis: 80%;
          -ms-flex-preferred-size: 80%;
          flex-basis: 80%;
          padding: 1rem;
        }
      }

      <div
        className="c0"
      />
    `);
  });

  test("<DisplayStyle /> variant (victory)", () => {
    const displayStyle = renderer
      .create(<DisplayStyle warning={false} victory={true} />)
      .toJSON();
    expect(displayStyle).toMatchInlineSnapshot(`
      .c0 {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-align-content: center;
        -ms-flex-line-pack: center;
        align-content: center;
        -webkit-box-pack: justify;
        -webkit-justify-content: space-between;
        -ms-flex-pack: justify;
        justify-content: space-between;
        padding: 0.5rem;
        -webkit-flex-wrap: nowrap;
        -ms-flex-wrap: nowrap;
        flex-wrap: nowrap;
        -webkit-flex-basis: 100%;
        -ms-flex-preferred-size: 100%;
        flex-basis: 100%;
        border: solid 0.5rem #21252e;
        border-radius: 0.25rem;
        -webkit-clip-path: polygon( 2% 0, 98% 0, 100% 10%, 100% 90%, 98% 100%, 2% 100%, 0 90%, 0 10% );
        clip-path: polygon( 2% 0, 98% 0, 100% 10%, 100% 90%, 98% 100%, 2% 100%, 0 90%, 0 10% );
        background: repeating-linear-gradient( #5d910f5f 6px, #5d910f5f 9px, transparent 9px, transparent 22px ), repeating-linear-gradient( to right, #5d910f5f 6px, #5d910f5f 9px, transparent 9px, transparent 22px ), #00d500;
        -webkit-transition: background-color 500ms ease-in-out;
        transition: background-color 500ms ease-in-out;
        height: 4.5rem;
      }

      @media (min-width:43rem) {
        .c0 {
          border: solid 1rem #21252e;
          -webkit-flex-basis: 80%;
          -ms-flex-preferred-size: 80%;
          flex-basis: 80%;
          padding: 1rem;
        }
      }

      @media (min-width:62rem) {
        .c0 {
          height: 6rem;
          border: solid 1.125rem #21252e;
          -webkit-flex-basis: 80%;
          -ms-flex-preferred-size: 80%;
          flex-basis: 80%;
          padding: 1rem;
        }
      }

      <div
        className="c0"
      />
    `);
  });

  test("<DisplayStyle /> variant (warning || no connection)", () => {
    const displayStyle = renderer
      .create(<DisplayStyle warning={true} victory={false} />)
      .toJSON();
    expect(displayStyle).toMatchInlineSnapshot(`
      .c0 {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-align-content: center;
        -ms-flex-line-pack: center;
        align-content: center;
        -webkit-box-pack: justify;
        -webkit-justify-content: space-between;
        -ms-flex-pack: justify;
        justify-content: space-between;
        padding: 0.5rem;
        -webkit-flex-wrap: nowrap;
        -ms-flex-wrap: nowrap;
        flex-wrap: nowrap;
        -webkit-flex-basis: 100%;
        -ms-flex-preferred-size: 100%;
        flex-basis: 100%;
        border: solid 0.5rem #21252e;
        border-radius: 0.25rem;
        -webkit-clip-path: polygon( 2% 0, 98% 0, 100% 10%, 100% 90%, 98% 100%, 2% 100%, 0 90%, 0 10% );
        clip-path: polygon( 2% 0, 98% 0, 100% 10%, 100% 90%, 98% 100%, 2% 100%, 0 90%, 0 10% );
        background: repeating-linear-gradient( #910f325f 6px, #910f325f 9px, transparent 9px, transparent 22px ), repeating-linear-gradient( to right, #910f325f 6px, #910f325f 9px, transparent 9px, transparent 22px ), #ff0000;
        -webkit-transition: background-color 500ms ease-in-out;
        transition: background-color 500ms ease-in-out;
        height: 4.5rem;
      }

      @media (min-width:43rem) {
        .c0 {
          border: solid 1rem #21252e;
          -webkit-flex-basis: 80%;
          -ms-flex-preferred-size: 80%;
          flex-basis: 80%;
          padding: 1rem;
        }
      }

      @media (min-width:62rem) {
        .c0 {
          height: 6rem;
          border: solid 1.125rem #21252e;
          -webkit-flex-basis: 80%;
          -ms-flex-preferred-size: 80%;
          flex-basis: 80%;
          padding: 1rem;
        }
      }

      <div
        className="c0"
      />
    `);
  });
});
