import "jest-styled-components";

import React from "react";
import renderer from "react-test-renderer";
import { expect, test } from "vitest";

import { DeleteButton } from "./index";

test("<DeleteButton />: snapshot test", () => {
  const deleteButton = renderer.create(<DeleteButton />);
  expect(deleteButton).toMatchInlineSnapshot(`
    .c0 {
      -webkit-align-self: flex-end;
      -ms-flex-item-align: end;
      align-self: flex-end;
      height: 20px;
      width: 20px;
      margin-left: auto;
      margin-right: 0.75rem;
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
      <path
        d="M21 4H8l-7 8 7 8h13a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z"
      />
      <line
        x1="18"
        x2="12"
        y1="9"
        y2="15"
      />
      <line
        x1="12"
        x2="18"
        y1="9"
        y2="15"
      />
    </svg>
  `);
});
