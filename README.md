# Rock, Paper, Scissors, Lizard, Spock

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

This is a multiplayer implementation of the game [Rock, Paper, Scissors, Lizard, Spock](https://bigbangtheory.fandom.com/wiki/Rock,_Paper,_Scissors,_Lizard,_Spock).

## How to play

To play the game, simply navigate to the website using a web browser. The website should display a waiting room where you can wait for an opponent to join the game.

Once an opponent has joined the game, you'll be prompted to make your move by clicking on one of the buttons representing Rock, Paper, Scissors, Lizard, or Spock. Your opponent will also make their move at the same time.

After both players have made their moves, the game will determine the winner based on the rules of Rock, Paper, Scissors, Lizard, Spock. The winner will be announced on the screen.

## Technical Detail

This implementation uses WebSockets for real-time communication between the client and the server.

It is made using the Next.js framework, with React with Typescript and the library Socket.io-client to handle the websocket on the client,
and [the api routes of Next.js](https://nextjs.org/docs/api-routes/introduction) with Socket.io to handle the websocket connection and dispatch message.

The server maintains a list of connected clients and waits for two clients to connect before starting a game. Once a game has started, the server waits for both clients to make their moves before determining the winner and broadcasting the result to both clients.

The client uses WebSockets to communicate with the server and to receive updates in real time. The client also uses React to manage the user interface and to update the screen based on the current state of the game.

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Build

To build the project, run:

```bash
npm run build
```

Then you can run this build using:

```bash
npm run start
```

## Generate

This projet use the atomic design architecture.
You can generate the different type of component using [plop](https://github.com/plopjs/plop).

For that, simply run:

```bash
npm run generate
```
