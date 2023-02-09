# Report
Relazione sul progetto

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

Come framework principale ho utilizzato [Express](https://expressjs.com).

Avendoci già lavorato in precedenza, ne ho apprezzato la flessibilità e il minimalismo.

Per gestire la comunicazione tra client e server, ho deciso di utilizzare delle WebSocket, poiché:
- sono bidirezionali
- a bassa latenza
- basate su eventi

Per l'implementazione, ho utilizzato [Socket.io](https://socket.io), per la presenza di feature come la riconnessione e il buffering dei pacchetti, utili nel caso di disconnessioni.

Per strutturare il backend mi sono basato sui [suggerimenti](https://socket.io/docs/v4/server-application-structure/) presenti in Socket.io, riguardo gli event handler delle socket suddivisi per file.

## Design

***

Per il design dell'app ho cercato di attenermi al tema dell'esplorazione spaziale basandomi su questi [artwork](https://thehungryjpeg.com/product/3700215-control-panels-spaceship).

## Frontend

***

Come framework principali ho utilizzato [React](https://reactjs.org) e [Styled-Components](https://styled-components.com) (CSS-in-JS).

## Structure

***

Il progetto è strutturato come monorepo.

La stuttura a monorepo prevede di suddividere il progetto in feature indipendenti dentro a package.

> i package sono raggruppati per tipologia

```
packages/
├── backend    - package del backend
├── common     - package condivisi
└── frontend   - package del frontend
```

> i package del `frontend` sono raggruppati per feature

```
packages/frontend
├── core      - package principali che comprendono costanti globali o componenti chiave
├── deck      - package relativi ai comandi del rover
└── minimap   - package della minimappa 
```

Ogni package è suddiviso a sua volta in diversi layer:
  - `data`:
    - principalmente contiene provider per i sub-componenti interni al package
  - `shared`:
    - contiene componenti, hook, util e costanti
    - tutti gli elementi presenti in questo layer sono condivisibili fra tutti i layer
  - `ui`:
    - contiene sub-componenti
    - ogni sub-componente, può usare elementi provenienti da `shared`

<p align='center'>
  <img alt='Layers' width='500' src='https://www.developerway.com/assets/react-project-structure/simple-package-diagram.png'>
</p>

Il layer `ui` ha una struttura ad albero, ciò comporta che ogni sub-componente può importare solo componenti figli.

Ho adottato questa struttura gerarchica per prevenire complessita durante i refactor.

Da tale vincolo deriva l'importanza del layer `shared`, poiché ogni elemento presente in esso, è condivisibile senza vincoli gerarchici.

<p align='center'>
  <img alt='Layers' width='500' src='https://www.developerway.com/assets/react-project-structure/tree-with-shared.png'>
</p>


Il lato negativo di questo approccio è che rende la struttura del progetto molto annidata.

Ho comunque cercato di appiattirla omettendo le cartelle dei layer dove possibile:

> in questo package è presente solo un sub-componente per `ui`

```
packages/frontend/minimap/grid
├── area - sub-componente
├── index.tsx
└── package.json
```

Questa è la fonte principale su cui mi sono basato per strutturare il progetto come monorepo:
https://www.developerway.com/posts/react-project-structure

## Testing

***

Come framework principale per testare il progetto ho utilizzato [Vitest](https://vitest.dev).

Ho utilizzato unit test principalmente per le `util` dei package e snapshot per i componenti, cercado di ottenere un buon livello di coverage.

> ogni package ha al suo interno più file di test

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

Ho aggiunto anche dei test in CI, per trovare differenze e regressioni dell'app sui principali browser, utilizzando [Cypress](https://docs.cypress.io) e [Happo](https://happo.io).


## CI

***

Ho impostato [GitHub Actions](https://github.com/features/actions) per automare linting, formatting e testing per ogni push request.





