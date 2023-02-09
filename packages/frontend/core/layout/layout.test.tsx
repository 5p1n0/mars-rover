import "jest-styled-components";

import React from "react";
import renderer from "react-test-renderer";
import { describe, expect, test } from "vitest";

import { BackgroundStyle, LayoutStyle } from "./styles";

describe("<LayoutStyle /> & <BackgroundStyle />: snapshot tests", () => {
  test("<LayoutStyle />", () => {
    const layoutStyle = renderer.create(<LayoutStyle />).toJSON();
    expect(layoutStyle).toMatchInlineSnapshot(`
      .c0 {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-flex-direction: column;
        -ms-flex-direction: column;
        flex-direction: column;
        -webkit-align-items: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        padding: 0.5rem;
        gap: 10rem;
      }

      @media (min-width:43rem) {
        .c0 {
          padding: 2rem;
          gap: 20rem;
        }
      }

      <div
        className="c0"
      />
    `);
  });

  test("<BackgroundStyle />", () => {
    const backgroundStyle = renderer.create(<BackgroundStyle />).toJSON();
    expect(backgroundStyle).toMatchInlineSnapshot(`
      .c0 {
        position: fixed;
        z-index: -1;
        top: 50%;
        left: 50%;
        height: 1px;
        width: 1px;
        background-color: #fff;
        border-radius: 50%;
        -webkit-animation: xlEqp 20s alternate infinite;
        animation: xlEqp 20s alternate infinite;
        box-shadow: 43vw -49vh 3px 1px #e4e4f0cc,-43vw -14vh 0px 3px #e4e4f0cc, -11vw 15vh 3px 2px #e4e4f0cc,-25vw -50vh 1px 1px #e4e4f0cc, -36vw -32vh 0px 2px #e4e4f0cc,-9vw 45vh 2px 2px #e4e4f0cc, -8vw 31vh 0px 3px #e4e4f0cc,3vw 30vh 1px 1px #e4e4f0cc, 37vw 36vh 2px 2px #e4e4f0cc,-13vw -3vh 1px 2px #e4e4f0cc, -27vw -41vh 3px 1px #e4e4f0cc,35vw 5vh 0px 3px #e4e4f0cc, -4vw -29vh 1px 2px #e4e4f0cc,16vw -17vh 0px 1px #e4e4f0cc, 43vw -37vh 0px 2px #e4e4f0cc,-18vw 9vh 1px 1px #e4e4f0cc, -31vw 43vh 2px 3px #e4e4f0cc,5vw -12vh 0px 2px #e4e4f0cc, -18vw -44vh 3px 1px #e4e4f0cc,1vw 28vh 3px 2px #e4e4f0cc, -4vw 2vh 2px 1px #e4e4f0cc,-46vw -13vh 2px 1px #e4e4f0cc, -36vw -11vh 2px 3px #e4e4f0cc,5vw -24vh 1px 3px #e4e4f0cc, 23vw -15vh 0px 2px #e4e4f0cc,-37vw -44vh 0px 3px #e4e4f0cc, -2vw -21vh 1px 3px #e4e4f0cc,38vw 13vh 1px 1px #e4e4f0cc, 21vw -37vh 1px 2px #e4e4f0cc,40vw -32vh 0px 2px #e4e4f0cc, -41vw -16vh 3px 1px #e4e4f0cc,-18vw -5vh 0px 2px #e4e4f0cc, -10vw -15vh 0px 3px #e4e4f0cc,20vw -13vh 3px 3px #e4e4f0cc, -3vw 5vh 0px 1px #e4e4f0cc,49vw 47vh 2px 3px #e4e4f0cc, -28vw 33vh 0px 2px #e4e4f0cc,-9vw 21vh 2px 1px #e4e4f0cc, 12vw -38vh 3px 3px #e4e4f0cc,50vw 32vh 3px 3px #e4e4f0cc, -11vw 38vh 3px 1px #e4e4f0cc,2vw 36vh 1px 3px #e4e4f0cc, 17vw -45vh 0px 1px #e4e4f0cc,-26vw -45vh 3px 2px #e4e4f0cc, 50vw 39vh 0px 1px #e4e4f0cc,12vw -28vh 1px 3px #e4e4f0cc, -1vw -34vh 0px 2px #e4e4f0cc,-21vw 9vh 0px 2px #e4e4f0cc, -19vw 3vh 0px 1px #e4e4f0cc,-23vw -25vh 0px 3px #e4e4f0cc, -6vw -25vh 2px 2px #e4e4f0cc,11vw 2vh 1px 3px #e4e4f0cc, -48vw 26vh 2px 1px #e4e4f0cc,13vw 13vh 3px 3px #e4e4f0cc, -44vw -43vh 1px 1px #e4e4f0cc,49vw 48vh 2px 3px #e4e4f0cc, -9vw -23vh 0px 2px #e4e4f0cc,3vw -33vh 2px 2px #e4e4f0cc, 24vw 29vh 0px 2px #e4e4f0cc,29vw -18vh 0px 3px #e4e4f0cc, -45vw -16vh 3px 3px #e4e4f0cc,9vw -20vh 1px 1px #e4e4f0cc, 26vw 34vh 3px 3px #e4e4f0cc,-28vw 9vh 3px 3px #e4e4f0cc, 47vw 41vh 3px 3px #e4e4f0cc,29vw 1vh 2px 3px #e4e4f0cc, -23vw -47vh 1px 2px #e4e4f0cc,35vw 39vh 3px 3px #e4e4f0cc, 28vw 2vh 1px 3px #e4e4f0cc,0vw 22vh 0px 3px #e4e4f0cc, 13vw 38vh 0px 1px #e4e4f0cc,49vw -25vh 0px 2px #e4e4f0cc, -7vw -41vh 1px 1px #e4e4f0cc,-48vw -11vh 1px 1px #e4e4f0cc, 37vw 39vh 0px 3px #e4e4f0cc,36vw 43vh 3px 2px #e4e4f0cc, 46vw -44vh 2px 2px #e4e4f0cc,-27vw -15vh 3px 2px #e4e4f0cc, 40vw -27vh 1px 1px #e4e4f0cc,1vw -50vh 1px 3px #e4e4f0cc, -20vw -5vh 1px 2px #e4e4f0cc,49vw 2vh 0px 2px #e4e4f0cc, -6vw 39vh 1px 2px #e4e4f0cc,-40vw -4vh 1px 1px #e4e4f0cc, -42vw -40vh 3px 3px #e4e4f0cc,-12vw -47vh 1px 3px #e4e4f0cc, -2vw -6vh 2px 1px #e4e4f0cc,-15vw -4vh 1px 1px #e4e4f0cc, 18vw 30vh 1px 3px #e4e4f0cc,50vw -28vh 0px 3px #e4e4f0cc, 46vw -15vh 3px 3px #e4e4f0cc,-1vw -33vh 1px 1px #e4e4f0cc, -47vw 23vh 2px 3px #e4e4f0cc,-30vw 45vh 2px 2px #e4e4f0cc, 15vw 18vh 1px 1px #e4e4f0cc,43vw -20vh 0px 2px #e4e4f0cc, -14vw 18vh 2px 1px #e4e4f0cc,33vw 4vh 0px 2px #e4e4f0cc, 5vw 6vh 0px 3px #e4e4f0cc,40vw 16vh 2px 3px #e4e4f0cc;
      }

      <div
        className="c0"
      />
    `);
  });
});
