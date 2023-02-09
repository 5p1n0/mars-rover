import "jest-styled-components";

import React from "react";
import renderer from "react-test-renderer";
import { expect, test } from "vitest";

import { Borders } from "./index";

test("<Borders />: snapshot test", () => {
  const borders = renderer.create(<Borders />).toJSON();
  expect(borders).toMatchInlineSnapshot(`
    [
      .c0 {
      position: absolute;
      background-color: #4b597c;
    }

    .c1 {
      height: 0.5rem;
      width: 40%;
      top: -0.5rem;
    }

    @media (min-width:43rem) {
      .c1 {
        height: 1.5rem;
        top: -1.5rem;
      }
    }

    @media (min-width:43rem) {

    }

    @media (min-width:43rem) {

    }

    @media (min-width:43rem) {

    }

    <div
        className="c0 c1"
      />,
      .c0 {
      position: absolute;
      background-color: #4b597c;
    }

    .c1 {
      width: 0.5rem;
      height: 40%;
      right: 100%;
      top: 30%;
    }

    @media (min-width:43rem) {

    }

    @media (min-width:43rem) {

    }

    @media (min-width:43rem) {

    }

    @media (min-width:43rem) {
      .c1 {
        width: 1.5rem;
      }
    }

    <div
        className="c0 c1"
      />,
      .c0 {
      position: absolute;
      background-color: #4b597c;
    }

    .c1 {
      width: 0.5rem;
      height: 40%;
      left: 100%;
      top: 30%;
    }

    @media (min-width:43rem) {

    }

    @media (min-width:43rem) {

    }

    @media (min-width:43rem) {
      .c1 {
        width: 1.5rem;
      }
    }

    @media (min-width:43rem) {

    }

    <div
        className="c0 c1"
      />,
      .c0 {
      position: absolute;
      background-color: #4b597c;
    }

    .c1 {
      height: 0.5rem;
      width: 40%;
      bottom: -0.5rem;
    }

    @media (min-width:43rem) {

    }

    @media (min-width:43rem) {
      .c1 {
        height: 1.5rem;
        bottom: -1.5rem;
      }
    }

    @media (min-width:43rem) {

    }

    @media (min-width:43rem) {

    }

    <div
        className="c0 c1"
      />,
    ]
  `);
});
