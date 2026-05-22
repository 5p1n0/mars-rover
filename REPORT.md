# Report
Project Report

## Tech

***

  > Frontend
  - Typescript
  - React
  - Styled-Components

  > Backend
  - Typescript
  - Express.js
  - Socket.io

  > Testing
  - Vitest
  - Cypress
  - Happo
  
  > Tooling
  - Npm
  - Vite
  - Ts-node
  - Eslint
  - Prettier

  > CI
  - GitHub Actions


## Backend

***

I used [Express](https://expressjs.com) as the main framework.

Having already worked with it previously, I appreciated its flexibility and minimalism.

To manage communication between client and server, I decided to use WebSockets, because:
- they are bidirectional
- low latency
- event-based

For the implementation, I used [Socket.io](https://socket.io), for the presence of features such as reconnection and packet buffering, useful in case of disconnections.

To structure the backend, I based myself on the [recommendations](https://socket.io/docs/v4/server-application-structure/) present in Socket.io, regarding socket event handlers divided by file.

## Design

***

For the app design, I tried to adhere to the theme of space exploration based on these [artwork](https://thehungryjpeg.com/product/3700215-control-panels-spaceship).

## Frontend

***

I used [React](https://reactjs.org) and [Styled-Components](https://styled-components.com) (CSS-in-JS) as the main frameworks.

## Structure

***

The project is structured as a monorepo.

The monorepo structure involves dividing the project into independent features within packages.

> packages are grouped by type

```
packages/
├── backend    - backend package
├── common     - shared packages
└── frontend   - frontend package
```

> frontend packages are grouped by feature

```
packages/frontend
├── core      - main packages that include global constants or key components
├── deck      - packages related to rover commands
└── minimap   - minimap package
```

Each package is further divided into several layers:
  - `data`:
    - mainly contains providers for sub-components internal to the package
  - `shared`:
    - contains components, hooks, utilities and constants
    - all elements present in this layer are shareable across all layers
  - `ui`:
    - contains sub-components
    - each sub-component can use elements from `shared`

<p align='center'>
  <img alt='Layers' width='500' src='https://www.developerway.com/assets/react-project-structure/simple-package-diagram.png'>
</p>

The `ui` layer has a tree structure, which means that each sub-component can only import child components.

I adopted this hierarchical structure to prevent complexity during refactoring.

From this constraint derives the importance of the `shared` layer, since every element present in it is shareable without hierarchical constraints.

<p align='center'>
  <img alt='Layers' width='500' src='https://www.developerway.com/assets/react-project-structure/tree-with-shared.png'>
</p>

The downside of this approach is that it makes the project structure very nested.

However, I tried to flatten it by omitting layer folders where possible:

> this package only has one sub-component for `ui`

```
packages/frontend/minimap/grid
├── area - sub-component
├── index.tsx
└── package.json
```

This is the reference that I used for structuring the project as a monorepo:
https://www.developerway.com/posts/react-project-structure

## Testing

***

I used [Vitest](https://vitest.dev) as the main testing framework.

I used unit tests mainly for package `utilities` and snapshots for components, trying to achieve a good coverage level.

> each package has multiple test files within it

```
packages/frontend/minimap/rover
├── shared
│   ├── index.ts
│   ├── utils.test.tsx - unit tests
│   └── utils.ts
├── index.tsx
├── package.json
├── rover.test.tsx - snapshot tests
└── styles.tsx
```

I also added tests in CI to find differences and regressions on major browsers, using [Cypress](https://docs.cypress.io) and [Happo](https://happo.io).


## CI

***

I set up [GitHub Actions](https://github.com/features/actions) to automate linting, formatting and testing for every push request.



































































































































































