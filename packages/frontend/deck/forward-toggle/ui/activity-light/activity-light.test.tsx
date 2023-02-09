import "jest-styled-components";

import React from "react";
import renderer from "react-test-renderer";
import { describe, expect, test } from "vitest";

import { ActivityLight } from "./index";
import { ActivityLightStyle } from "./styles";

describe("<ActivityLight /> & <ActivityLightStyle />: snapshot tests", () => {
  test("<ActivityLight />", () => {
    const activityLight = renderer.create(<ActivityLight />).toJSON();
    expect(activityLight).toMatchInlineSnapshot(`
      .c0 {
        display: none;
        width: 2.25rem;
        height: 1rem;
        border: solid 4px #21252e;
        background-color: #009999;
        -webkit-transition: background-color,box-shadow 100ms ease-in-out;
        transition: background-color,box-shadow 100ms ease-in-out;
      }

      @media (min-width:43rem) {
        .c0 {
          display: block;
          width: 3rem;
        }
      }

      <span
        className="c0"
      />
    `);
  });

  test("<ActivityLightStyle />", () => {
    const activityLightStyle = renderer
      .create(<ActivityLightStyle isOn={true} />)
      .toJSON();
    expect(activityLightStyle).toMatchInlineSnapshot(`
      .c0 {
        display: none;
        width: 2.25rem;
        height: 1rem;
        border: solid 4px #21252e;
        background-color: #00e6e6;
        box-shadow: 0 0 6px 3px inset #69c5ca;
        -webkit-transition: background-color,box-shadow 100ms ease-in-out;
        transition: background-color,box-shadow 100ms ease-in-out;
      }

      @media (min-width:43rem) {
        .c0 {
          display: block;
          width: 3rem;
        }
      }

      <span
        className="c0"
      />
    `);
  });

  test("<ActivityLightStyle /> variant", () => {
    const activityLightStyleVariant = renderer
      .create(<ActivityLightStyle isOn={false} />)
      .toJSON();
    expect(activityLightStyleVariant).toMatchInlineSnapshot(`
      .c0 {
        display: none;
        width: 2.25rem;
        height: 1rem;
        border: solid 4px #21252e;
        background-color: #009999;
        -webkit-transition: background-color,box-shadow 100ms ease-in-out;
        transition: background-color,box-shadow 100ms ease-in-out;
      }

      @media (min-width:43rem) {
        .c0 {
          display: block;
          width: 3rem;
        }
      }

      <span
        className="c0"
      />
    `);
  });
});
