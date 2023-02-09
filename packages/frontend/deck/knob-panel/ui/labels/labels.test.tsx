import "jest-styled-components";

import React from "react";
import renderer from "react-test-renderer";
import { describe, expect, test } from "vitest";

import { Labels } from "./index";
import {
  EastLabelStyle,
  NorthLabelStyle,
  SouthLabelStyle,
  WestLabelStyle,
} from "./styles";

describe("<Labels /> & <NorthLabelStyle /> & <EastLabelStyle /> & <SouthLabelStyle /> & <WestLabelStyle />: snapshot tests", () => {
  test("<Labels />", () => {
    const labels = renderer.create(<Labels />).toJSON();
    expect(labels).toMatchInlineSnapshot(`
      [
        .c0 {
        display: block;
        font-family: "VT323",monospace;
        font-size: 1.5rem;
        -webkit-transition: color 100ms ease-in-out;
        transition: color 100ms ease-in-out;
        color: #21252e;
      }

      .c1 {
        position: absolute;
        -webkit-align-self: start;
        -ms-flex-item-align: start;
        align-self: start;
        top: 0.5rem;
      }

      @media (min-width:43rem) {
        .c0 {
          font-size: 2rem;
        }
      }

      <span
          className="c0 c1"
          selected={false}
        >
          N
        </span>,
        .c0 {
        display: block;
        font-family: "VT323",monospace;
        font-size: 1.5rem;
        -webkit-transition: color 100ms ease-in-out;
        transition: color 100ms ease-in-out;
        color: #21252e;
      }

      .c1 {
        position: relative;
        -webkit-order: 3;
        -ms-flex-order: 3;
        order: 3;
        margin-right: 1rem;
        margin-left: auto;
      }

      @media (min-width:43rem) {
        .c0 {
          font-size: 2rem;
        }
      }

      <span
          className="c0 c1"
          selected={false}
        >
          E
        </span>,
        .c0 {
        display: block;
        font-family: "VT323",monospace;
        font-size: 1.5rem;
        -webkit-transition: color 100ms ease-in-out;
        transition: color 100ms ease-in-out;
        color: #21252e;
      }

      .c1 {
        position: absolute;
        -webkit-align-self: end;
        -ms-flex-item-align: end;
        align-self: end;
        bottom: 0.5rem;
      }

      @media (min-width:43rem) {
        .c0 {
          font-size: 2rem;
        }
      }

      <span
          className="c0 c1"
          selected={false}
        >
          S
        </span>,
        .c0 {
        display: block;
        font-family: "VT323",monospace;
        font-size: 1.5rem;
        -webkit-transition: color 100ms ease-in-out;
        transition: color 100ms ease-in-out;
        color: #21252e;
      }

      .c1 {
        position: relative;
        -webkit-order: 1;
        -ms-flex-order: 1;
        order: 1;
        margin-right: auto;
        margin-left: 1rem;
      }

      @media (min-width:43rem) {
        .c0 {
          font-size: 2rem;
        }
      }

      <span
          className="c0 c1"
          selected={false}
        >
          W
        </span>,
      ]
    `);
  });

  test("<NorthLabelStyle />", () => {
    const northLabel = renderer
      .create(<NorthLabelStyle selected={false} />)
      .toJSON();
    expect(northLabel).toMatchInlineSnapshot(`
      .c0 {
        display: block;
        font-family: "VT323",monospace;
        font-size: 1.5rem;
        -webkit-transition: color 100ms ease-in-out;
        transition: color 100ms ease-in-out;
        color: #21252e;
      }

      .c1 {
        position: absolute;
        -webkit-align-self: start;
        -ms-flex-item-align: start;
        align-self: start;
        top: 0.5rem;
      }

      @media (min-width:43rem) {
        .c0 {
          font-size: 2rem;
        }
      }

      <span
        className="c0 c1"
        selected={false}
      />
    `);
  });

  test("<NorthLabelStyle />", () => {
    const northLabel = renderer
      .create(<NorthLabelStyle selected={true} />)
      .toJSON();
    expect(northLabel).toMatchInlineSnapshot(`
      .c0 {
        display: block;
        font-family: "VT323",monospace;
        font-size: 1.5rem;
        -webkit-transition: color 100ms ease-in-out;
        transition: color 100ms ease-in-out;
        color: #e4e4f0;
      }

      .c1 {
        position: absolute;
        -webkit-align-self: start;
        -ms-flex-item-align: start;
        align-self: start;
        top: 0.5rem;
      }

      @media (min-width:43rem) {
        .c0 {
          font-size: 2rem;
        }
      }

      <span
        className="c0 c1"
        selected={true}
      />
    `);
  });

  test("<SouthLabelStyle />", () => {
    const southLabel = renderer
      .create(<SouthLabelStyle selected={false} />)
      .toJSON();
    expect(southLabel).toMatchInlineSnapshot(`
      .c0 {
        display: block;
        font-family: "VT323",monospace;
        font-size: 1.5rem;
        -webkit-transition: color 100ms ease-in-out;
        transition: color 100ms ease-in-out;
        color: #21252e;
      }

      .c1 {
        position: absolute;
        -webkit-align-self: end;
        -ms-flex-item-align: end;
        align-self: end;
        bottom: 0.5rem;
      }

      @media (min-width:43rem) {
        .c0 {
          font-size: 2rem;
        }
      }

      <span
        className="c0 c1"
        selected={false}
      />
    `);
  });

  test("<SouthLabelStyle />", () => {
    const southLabel = renderer
      .create(<SouthLabelStyle selected={true} />)
      .toJSON();
    expect(southLabel).toMatchInlineSnapshot(`
      .c0 {
        display: block;
        font-family: "VT323",monospace;
        font-size: 1.5rem;
        -webkit-transition: color 100ms ease-in-out;
        transition: color 100ms ease-in-out;
        color: #e4e4f0;
      }

      .c1 {
        position: absolute;
        -webkit-align-self: end;
        -ms-flex-item-align: end;
        align-self: end;
        bottom: 0.5rem;
      }

      @media (min-width:43rem) {
        .c0 {
          font-size: 2rem;
        }
      }

      <span
        className="c0 c1"
        selected={true}
      />
    `);
  });

  test("<EastLabelStyle />", () => {
    const eastLabel = renderer
      .create(<EastLabelStyle selected={false} />)
      .toJSON();
    expect(eastLabel).toMatchInlineSnapshot(`
      .c0 {
        display: block;
        font-family: "VT323",monospace;
        font-size: 1.5rem;
        -webkit-transition: color 100ms ease-in-out;
        transition: color 100ms ease-in-out;
        color: #21252e;
      }

      .c1 {
        position: relative;
        -webkit-order: 3;
        -ms-flex-order: 3;
        order: 3;
        margin-right: 1rem;
        margin-left: auto;
      }

      @media (min-width:43rem) {
        .c0 {
          font-size: 2rem;
        }
      }

      <span
        className="c0 c1"
        selected={false}
      />
    `);
  });

  test("<EastLabelStyle />", () => {
    const eastLabel = renderer
      .create(<EastLabelStyle selected={true} />)
      .toJSON();
    expect(eastLabel).toMatchInlineSnapshot(`
      .c0 {
        display: block;
        font-family: "VT323",monospace;
        font-size: 1.5rem;
        -webkit-transition: color 100ms ease-in-out;
        transition: color 100ms ease-in-out;
        color: #e4e4f0;
      }

      .c1 {
        position: relative;
        -webkit-order: 3;
        -ms-flex-order: 3;
        order: 3;
        margin-right: 1rem;
        margin-left: auto;
      }

      @media (min-width:43rem) {
        .c0 {
          font-size: 2rem;
        }
      }

      <span
        className="c0 c1"
        selected={true}
      />
    `);
  });

  test("<WestLabelStyle />", () => {
    const westLabel = renderer
      .create(<WestLabelStyle selected={false} />)
      .toJSON();
    expect(westLabel).toMatchInlineSnapshot(`
      .c0 {
        display: block;
        font-family: "VT323",monospace;
        font-size: 1.5rem;
        -webkit-transition: color 100ms ease-in-out;
        transition: color 100ms ease-in-out;
        color: #21252e;
      }

      .c1 {
        position: relative;
        -webkit-order: 1;
        -ms-flex-order: 1;
        order: 1;
        margin-right: auto;
        margin-left: 1rem;
      }

      @media (min-width:43rem) {
        .c0 {
          font-size: 2rem;
        }
      }

      <span
        className="c0 c1"
        selected={false}
      />
    `);
  });

  test("<WestLabelStyle />", () => {
    const westLabel = renderer
      .create(<WestLabelStyle selected={true} />)
      .toJSON();
    expect(westLabel).toMatchInlineSnapshot(`
      .c0 {
        display: block;
        font-family: "VT323",monospace;
        font-size: 1.5rem;
        -webkit-transition: color 100ms ease-in-out;
        transition: color 100ms ease-in-out;
        color: #e4e4f0;
      }

      .c1 {
        position: relative;
        -webkit-order: 1;
        -ms-flex-order: 1;
        order: 1;
        margin-right: auto;
        margin-left: 1rem;
      }

      @media (min-width:43rem) {
        .c0 {
          font-size: 2rem;
        }
      }

      <span
        className="c0 c1"
        selected={true}
      />
    `);
  });
});
