import "jest-styled-components";

import React from "react";
import renderer from "react-test-renderer";
import { expect, test } from "vitest";

import { DeckStyle } from "./styles";

test("<DeckStyle />: snapshot test", () => {
  const deckStyle = renderer.create(<DeckStyle />).toJSON();
  expect(deckStyle).toMatchInlineSnapshot(`
    .c0 {
      -webkit-flex: 1 1 30%;
      -ms-flex: 1 1 30%;
      flex: 1 1 30%;
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      -webkit-align-items: flex-start;
      -webkit-box-align: flex-start;
      -ms-flex-align: flex-start;
      align-items: flex-start;
      row-gap: 1rem;
      -webkit-flex-wrap: wrap;
      -ms-flex-wrap: wrap;
      flex-wrap: wrap;
      -webkit-box-pack: space-evenly;
      -webkit-justify-content: space-evenly;
      -ms-flex-pack: space-evenly;
      justify-content: space-evenly;
      width: 80vw;
      height: 80vw;
    }

    @media (min-width:43rem) {
      .c0 {
        height: 70vw;
        width: 70vw;
      }
    }

    @media (min-width:62rem) {
      .c0 {
        -webkit-align-items: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        height: 40vw;
        width: 40vw;
      }
    }

    <div
      className="c0"
    />
  `);
});
