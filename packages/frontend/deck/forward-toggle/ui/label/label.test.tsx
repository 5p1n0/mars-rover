import "jest-styled-components";

import React from "react";
import renderer from "react-test-renderer";
import { describe, expect, test } from "vitest";

import { Label } from "./index";
import { LabelStyle } from "./styles";

describe("<Label /> & <LabelStyle />: snapshot tests", () => {
  test("<Label />", () => {
    const label = renderer.create(<Label>N</Label>).toJSON();
    expect(label).toMatchInlineSnapshot(`
      .c0 {
        display: block;
        font-family: "VT323",monospace;
        font-size: 1.5rem;
        -webkit-transition: color 100ms ease-in-out;
        transition: color 100ms ease-in-out;
        color: #21252e;
      }

      @media (min-width:43rem) {
        .c0 {
          font-size: 2rem;
        }
      }

      <span
        className="c0"
      >
        N
      </span>
    `);
  });

  test("<LabelStyle />", () => {
    const labelStyle = renderer
      .create(<LabelStyle isSelected={true} />)
      .toJSON();
    expect(labelStyle).toMatchInlineSnapshot(`
      .c0 {
        display: block;
        font-family: "VT323",monospace;
        font-size: 1.5rem;
        -webkit-transition: color 100ms ease-in-out;
        transition: color 100ms ease-in-out;
        color: #e4e4f0;
      }

      @media (min-width:43rem) {
        .c0 {
          font-size: 2rem;
        }
      }

      <span
        className="c0"
      />
    `);
  });

  test("<LabelStyle /> variant", () => {
    const labelStyleVariant = renderer
      .create(<LabelStyle isSelected={false} />)
      .toJSON();
    expect(labelStyleVariant).toMatchInlineSnapshot(`
      .c0 {
        display: block;
        font-family: "VT323",monospace;
        font-size: 1.5rem;
        -webkit-transition: color 100ms ease-in-out;
        transition: color 100ms ease-in-out;
        color: #21252e;
      }

      @media (min-width:43rem) {
        .c0 {
          font-size: 2rem;
        }
      }

      <span
        className="c0"
      />
    `);
  });
});
