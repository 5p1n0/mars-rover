import "jest-styled-components";

import React from "react";
import renderer from "react-test-renderer";
import { expect, test } from "vitest";

import { SendButton } from "./index";

test("<SendButton />: snapshot test", () => {
  const sendButton = renderer.create(<SendButton />);
  expect(sendButton).toMatchInlineSnapshot(`
    .c0 {
      -webkit-align-self: end;
      -ms-flex-item-align: end;
      align-self: end;
      height: 20px;
      width: 20px;
      border-radius: 0.5rem;
      padding: 0.5rem;
      background-color: transparent;
      -webkit-transition: background-color 50ms ease;
      transition: background-color 50ms ease;
    }

    .c0:hover {
      background-color: #21252e;
    }

    @media (min-width:43rem) {
      .c0 {
        border-radius: 0.75rem;
        padding: 0.75rem;
        height: 24px;
        width: 24px;
      }
    }

    <svg
      className="c0"
      fill="none"
      height={24}
      onClick={[Function]}
      stroke="white"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
      width={24}
      xmlns="http://www.w3.org/2000/svg"
    >
      <line
        x1="22"
        x2="11"
        y1="2"
        y2="13"
      />
      <polygon
        points="22 2 15 22 11 13 2 9 22 2"
      />
    </svg>
  `);
});
