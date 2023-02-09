import "jest-styled-components";

import React from "react";
import renderer from "react-test-renderer";
import { describe, expect, test } from "vitest";

import { Block } from "./index";
import { BarStyle, BlockStyle } from "./styles";

describe("<Block /> & <BlockStyle /> & <BarStyle />: snapshot tests", () => {
  test("<Block />", () => {
    const block = renderer.create(<Block />).toJSON();
    expect(block).toMatchInlineSnapshot(`
      .c0 {
        position: relative;
        width: 2rem;
        height: 3rem;
        margin: 0 auto 0.5rem;
        background: #21252e;
        cursor: pointer;
      }

      .c1 {
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

      @media (min-width:43rem) {
        .c0 {
          margin: 1.75rem auto;
          width: 3rem;
          height: 6rem;
        }
      }

      @media (min-width:43rem) {
        .c1 {
          left: 0.9rem;
          width: 1.2rem;
          height: 6rem;
        }
      }

      <div
        className="c0"
        onClick={[Function]}
      >
        <span
          className="c1"
        />
      </div>
    `);
  });

  test("<BlockStyle />", () => {
    const blockStyle = renderer.create(<BlockStyle />).toJSON();
    expect(blockStyle).toMatchInlineSnapshot(`
      .c0 {
        position: relative;
        width: 2rem;
        height: 3rem;
        margin: 0 auto 0.5rem;
        background: #21252e;
        cursor: pointer;
      }

      @media (min-width:43rem) {
        .c0 {
          margin: 1.75rem auto;
          width: 3rem;
          height: 6rem;
        }
      }

      <div
        className="c0"
      />
    `);
  });

  test("<BarStyle />", () => {
    const barStyle = renderer.create(<BarStyle isOn={false} />).toJSON();
    expect(barStyle).toMatchInlineSnapshot(`
      .c0 {
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

      @media (min-width:43rem) {
        .c0 {
          left: 0.9rem;
          width: 1.2rem;
          height: 6rem;
        }
      }

      <span
        className="c0"
      />
    `);
  });

  test("<BarStyle /> variant", () => {
    const barStyleVariant = renderer.create(<BarStyle isOn={true} />).toJSON();
    expect(barStyleVariant).toMatchInlineSnapshot(`
      .c0 {
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
        -webkit-transform: translateY(-70%) rotateX(180deg);
        -ms-transform: translateY(-70%) rotateX(180deg);
        transform: translateY(-70%) rotateX(180deg);
      }

      @media (min-width:43rem) {
        .c0 {
          left: 0.9rem;
          width: 1.2rem;
          height: 6rem;
        }
      }

      <span
        className="c0"
      />
    `);
  });
});
