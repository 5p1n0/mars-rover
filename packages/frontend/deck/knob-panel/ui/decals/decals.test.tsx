import "jest-styled-components";

import React from "react";
import renderer from "react-test-renderer";
import { expect, test } from "vitest";

import { Decals } from "./index";

test("<Decals />: snapshot test", () => {
  const decals = renderer.create(<Decals />).toJSON();
  expect(decals).toMatchInlineSnapshot(`
    [
      .c0 {
      width: 0.625rem;
      height: 0.625rem;
      border-radius: 50%;
      background-color: white;
      position: absolute;
    }

    .c1 {
      top: 1rem;
      right: calc(100% - 1.5rem);
    }

    @media (min-width:43rem) {
      .c0 {
        width: 1rem;
        height: 1rem;
      }
    }

    @media (min-width:62rem) {
      .c0 {
        width: 1rem;
        height: 1rem;
      }
    }

    <div
        className="c0 c1"
      />,
      .c0 {
      width: 0.625rem;
      height: 0.625rem;
      border-radius: 50%;
      background-color: white;
      position: absolute;
    }

    .c1 {
      top: 1rem;
      left: calc(100% - 1.5rem);
    }

    @media (min-width:43rem) {
      .c0 {
        width: 1rem;
        height: 1rem;
      }
    }

    @media (min-width:62rem) {
      .c0 {
        width: 1rem;
        height: 1rem;
      }
    }

    <div
        className="c0 c1"
      />,
      .c0 {
      width: 0.625rem;
      height: 0.625rem;
      border-radius: 50%;
      background-color: white;
      position: absolute;
    }

    .c1 {
      bottom: 1rem;
      right: calc(100% - 1.5rem);
    }

    @media (min-width:43rem) {
      .c0 {
        width: 1rem;
        height: 1rem;
      }
    }

    @media (min-width:62rem) {
      .c0 {
        width: 1rem;
        height: 1rem;
      }
    }

    <div
        className="c0 c1"
      />,
      .c0 {
      width: 0.625rem;
      height: 0.625rem;
      border-radius: 50%;
      background-color: white;
      position: absolute;
    }

    .c1 {
      bottom: 1rem;
      left: calc(100% - 1.5rem);
    }

    @media (min-width:43rem) {
      .c0 {
        width: 1rem;
        height: 1rem;
      }
    }

    @media (min-width:62rem) {
      .c0 {
        width: 1rem;
        height: 1rem;
      }
    }

    <div
        className="c0 c1"
      />,
    ]
  `);
});
