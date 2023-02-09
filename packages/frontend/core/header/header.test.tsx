import "jest-styled-components";

import React from "react";
import renderer from "react-test-renderer";
import { describe, expect, test } from "vitest";

import { Header } from "./index";
import { FancyTextStyle } from "./styles";

describe("<Header /> & <FancyTextStyle />: snapshot tests", () => {
  test("<Header />", () => {
    const header = renderer.create(<Header />).toJSON();
    expect(header).toMatchInlineSnapshot(`
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
      }

      .c1 {
        font-family: "Orbitron",sans-serif;
        font-size: 2.5rem;
        color: #e7612e;
        background-color: black;
      }

      .c2 {
        color: #e7612e;
        background-color: black;
        font-family: "Space Grotesk",sans-serif;
        font-size: 1rem;
        text-shadow: red 1px 0 5px;
        line-height: 2.25;
        text-align: center;
      }

      .c3 {
        font-family: "Space Grotesk",sans-serif;
        width: -webkit-fit-content;
        width: -moz-fit-content;
        width: fit-content;
        text-shadow: none;
        position: relative;
        color: black;
        z-index: 0;
      }

      .c3::before {
        content: "";
        position: absolute;
        top: 50%;
        width: 100%;
        height: 160%;
        z-index: -1;
        -webkit-transform: scale(120%) rotate(1deg) translateY(-35%);
        -ms-transform: scale(120%) rotate(1deg) translateY(-35%);
        transform: scale(120%) rotate(1deg) translateY(-35%);
        background-color: #e7612e;
      }

      .c4 {
        color: #20bbc2;
        text-shadow: #20bbc2 1px 0 5px;
        background-size: 100% 15%;
        background-repeat: repeat-x;
        background-position: left 0% bottom 10%;
        background-image: linear-gradient(181deg,#20bbc2 0%,#20bbc2 50%,transparent 54%,transparent 100%);
      }

      .c5 {
        color: #c22720;
        text-shadow: #c22720 1px 0 5px;
        background-size: 100% 15%;
        background-repeat: repeat-x;
        background-position: left 0% bottom 10%;
        background-image: linear-gradient(181deg,#c22720 0%,#c22720 50%,transparent 54%,transparent 100%);
      }

      .c6 {
        color: #bd2ee7;
        text-shadow: #bd2ee7 1px 0 5px;
        background-size: 100% 15%;
        background-repeat: repeat-x;
        background-position: left 0% bottom 10%;
        background-image: linear-gradient(181deg,#bd2ee7 0%,#bd2ee7 50%,transparent 54%,transparent 100%);
      }

      .c7 {
        color: #e7612e;
        background-color: black;
        border: 2px solid #e7612e;
        border-radius: 0.75rem;
        margin: 3rem 0;
        width: 4rem;
        height: 3rem;
        -webkit-transition: background-color color 50ms ease;
        transition: background-color color 50ms ease;
        cursor: pointer;
      }

      .c7:hover {
        background-color: #e7612e;
        color: black;
      }

      @media (min-width:43rem) {
        .c1 {
          font-size: 4rem;
        }
      }

      @media (min-width:43rem) {
        .c2 {
          line-height: 2.5;
          font-size: 1.25rem;
        }
      }

      @media (min-width:62rem) {
        .c2 {
          line-height: 2.5;
          font-size: 1.5rem;
        }
      }

      @media (min-width:43rem) {
        .c7 {
          width: 5rem;
          height: 4rem;
        }
      }

      <section
        className="c0"
      >
        <h1
          className="c1"
        >
          Mars Rover
        </h1>
        <p
          className="c2"
        >
          <span
            className="c3"
          >
            Hi fellow spaceman!
          </span>
          <br />
          <br />
          To accomplish your mission you must recover material samples from Mars
          <br />
          Search for them with the rover
          <br />
          Use the knob to change direction and the toggles to move
           
          <span
            className="c4"
            color="#20bbc2"
          >
            forward
          </span>
           
          or
           
          <span
            className="c5"
            color="#c22720"
          >
            backward
          </span>
          <br />
          Check and update your issued commands through the
           
          <span
            className="c6"
            color="#bd2ee7"
          >
            console prompt
          </span>
          <br />
          Then send them to the rover!
        </p>
        <a
          href="#control-panel"
        >
          <button
            aria-label="to_control_panel"
            className="c7"
          >
            <svg
              fill="none"
              height={24}
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              width={24}
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                x1="12"
                x2="12"
                y1="5"
                y2="19"
              />
              <polyline
                points="19 12 12 19 5 12"
              />
            </svg>
          </button>
        </a>
      </section>
    `);
  });

  test("<FancyTextStyle />", () => {
    const fancyTextStyle = renderer
      .create(<FancyTextStyle color="red" size={110} />)
      .toJSON();
    expect(fancyTextStyle).toMatchInlineSnapshot(`
      .c0 {
        font-family: "Space Grotesk",sans-serif;
        width: -webkit-fit-content;
        width: -moz-fit-content;
        width: fit-content;
        text-shadow: none;
        position: relative;
        color: black;
        z-index: 0;
      }

      .c0::before {
        content: "";
        position: absolute;
        top: 50%;
        width: 100%;
        height: 160%;
        z-index: -1;
        -webkit-transform: scale(120%) rotate(1deg) translateY(-35%);
        -ms-transform: scale(120%) rotate(1deg) translateY(-35%);
        transform: scale(120%) rotate(1deg) translateY(-35%);
        background-color: #e7612e;
      }

      <span
        className="c0"
        color="red"
        size={110}
      />
    `);
  });
});
