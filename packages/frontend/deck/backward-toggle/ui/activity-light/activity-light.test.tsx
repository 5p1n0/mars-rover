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
        background-color: #b33200;
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
        background-color: #ff4800;
        box-shadow: 0 0 6px 3px inset #fe743e;
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
        background-color: #b33200;
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
