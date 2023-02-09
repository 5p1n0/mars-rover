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
      width: 1rem;
      height: 1rem;
      border-radius: 50%;
      background-color: #4b597c;
      position: absolute;
      display: none;
    }

    .c1 {
      right: calc(100% + 1.5rem);
      bottom: calc(100% + 1.5rem);
    }

    @media (min-width:43rem) {

    }

    @media (min-width:43rem) {

    }

    @media (min-width:43rem) {
      .c0 {
        display: block;
      }
    }

    @media (min-width:43rem) {

    }

    <div
        className="c0 c1"
      />,
      .c0 {
      width: 1rem;
      height: 1rem;
      border-radius: 50%;
      background-color: #4b597c;
      position: absolute;
      display: none;
    }

    .c1 {
      right: calc(75% + 1.5rem);
      bottom: calc(100% + 1.5rem);
    }

    @media (min-width:43rem) {

    }

    @media (min-width:43rem) {

    }

    @media (min-width:43rem) {
      .c0 {
        display: block;
      }
    }

    @media (min-width:43rem) {

    }

    <div
        className="c0 c1"
      />,
      .c0 {
      width: 1rem;
      height: 1rem;
      border-radius: 50%;
      background-color: #4b597c;
      position: absolute;
      display: none;
    }

    .c1 {
      right: calc(100% + 1.5rem);
      bottom: calc(85% + 1.5rem);
    }

    @media (min-width:43rem) {

    }

    @media (min-width:43rem) {

    }

    @media (min-width:43rem) {
      .c0 {
        display: block;
      }
    }

    @media (min-width:43rem) {

    }

    <div
        className="c0 c1"
      />,
      .c0 {
      width: 1rem;
      height: 1rem;
      border-radius: 50%;
      background-color: #4b597c;
      position: absolute;
      display: none;
    }

    .c1 {
      left: calc(100% + 1.5rem);
      bottom: calc(100% + 1.5rem);
    }

    @media (min-width:43rem) {

    }

    @media (min-width:43rem) {

    }

    @media (min-width:43rem) {

    }

    @media (min-width:43rem) {
      .c0 {
        display: block;
      }
    }

    <div
        className="c0 c1"
      />,
      .c0 {
      width: 1rem;
      height: 1rem;
      border-radius: 50%;
      background-color: #4b597c;
      position: absolute;
      display: none;
    }

    .c1 {
      left: calc(75% + 1.5rem);
      bottom: calc(100% + 1.5rem);
    }

    @media (min-width:43rem) {

    }

    @media (min-width:43rem) {

    }

    @media (min-width:43rem) {

    }

    @media (min-width:43rem) {
      .c0 {
        display: block;
      }
    }

    <div
        className="c0 c1"
      />,
      .c0 {
      width: 1rem;
      height: 1rem;
      border-radius: 50%;
      background-color: #4b597c;
      position: absolute;
      display: none;
    }

    .c1 {
      left: calc(100% + 1.5rem);
      bottom: calc(85% + 1.5rem);
    }

    @media (min-width:43rem) {

    }

    @media (min-width:43rem) {

    }

    @media (min-width:43rem) {

    }

    @media (min-width:43rem) {
      .c0 {
        display: block;
      }
    }

    <div
        className="c0 c1"
      />,
      .c0 {
      width: 1rem;
      height: 1rem;
      border-radius: 50%;
      background-color: #4b597c;
      position: absolute;
      display: none;
    }

    .c1 {
      right: calc(100% + 1.5rem);
      top: calc(100% + 1.5rem);
    }

    @media (min-width:43rem) {
      .c0 {
        display: block;
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
      width: 1rem;
      height: 1rem;
      border-radius: 50%;
      background-color: #4b597c;
      position: absolute;
      display: none;
    }

    .c1 {
      right: calc(75% + 1.5rem);
      top: calc(100% + 1.5rem);
    }

    @media (min-width:43rem) {
      .c0 {
        display: block;
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
      width: 1rem;
      height: 1rem;
      border-radius: 50%;
      background-color: #4b597c;
      position: absolute;
      display: none;
    }

    .c1 {
      right: calc(100% + 1.5rem);
      top: calc(85% + 1.5rem);
    }

    @media (min-width:43rem) {
      .c0 {
        display: block;
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
      width: 1rem;
      height: 1rem;
      border-radius: 50%;
      background-color: #4b597c;
      position: absolute;
      display: none;
    }

    .c1 {
      left: calc(100% + 1.5rem);
      top: calc(100% + 1.5rem);
    }

    @media (min-width:43rem) {

    }

    @media (min-width:43rem) {
      .c0 {
        display: block;
      }
    }

    @media (min-width:43rem) {

    }

    @media (min-width:43rem) {

    }

    <div
        className="c0 c1"
      />,
      .c0 {
      width: 1rem;
      height: 1rem;
      border-radius: 50%;
      background-color: #4b597c;
      position: absolute;
      display: none;
    }

    .c1 {
      left: calc(75% + 1.5rem);
      top: calc(100% + 1.5rem);
    }

    @media (min-width:43rem) {

    }

    @media (min-width:43rem) {
      .c0 {
        display: block;
      }
    }

    @media (min-width:43rem) {

    }

    @media (min-width:43rem) {

    }

    <div
        className="c0 c1"
      />,
      .c0 {
      width: 1rem;
      height: 1rem;
      border-radius: 50%;
      background-color: #4b597c;
      position: absolute;
      display: none;
    }

    .c1 {
      left: calc(100% + 1.5rem);
      top: calc(85% + 1.5rem);
    }

    @media (min-width:43rem) {

    }

    @media (min-width:43rem) {
      .c0 {
        display: block;
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
