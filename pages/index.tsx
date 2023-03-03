import Image from "next/image";
import { useEffect, useState } from "react";
import { Socket } from "socket.io";
import SocketIOClient from "socket.io-client";
import { DefaultEventsMap } from "socket.io/dist/typed-events";

export default function Home() {
  const [connected, setConnected] = useState<boolean>(false);
  const [nbUser, setNbUser] = useState<number>(0);
  const [io, setIo] = useState<Socket>();

  useEffect(() => {
    if (!io) {
      const url = window.location.host;
      const io = SocketIOClient(url, {
        path: "/api/socket/init",
      });

      setIo(io as unknown as Socket);

      // log socket connection
      io.on("connect", () => {
        setConnected(true);
      });

      // Update the number of user when evetn "new-user" is emited
      io.on("new-user", (option) => {
        setNbUser(option.connectionCount);
      });

      setTimeout(() => io.emit("test"), 1000);

      return () => {
        setIo(undefined);
        io.close();
      };
    }
  }, []);

  return (
    <main>
      <section>{connected ? "connected" : "not connected"}</section>
      <section>number of users {nbUser}</section>

      <section>
        {io && nbUser < 2 ? (
          "Waiting for another player"
        ) : (
          <Game socket={io as Socket} />
        )}
      </section>
    </main>
  );
}

export enum Option {
  rock = "rock",
  paper = "paper",
  scissors = "scissors",
  lizard = "lizard",
  spock = "spock",
}

interface GameProps {
  socket: Socket<DefaultEventsMap, DefaultEventsMap>;
}

const options = [
  {
    name: "rock",
    path: "icons/rock.svg",
    alt: "rock icons",
    value: Option.rock,
  },
  {
    name: "paper",
    path: "icons/paper.svg",
    alt: "paper icons",
    value: Option.paper,
  },
  {
    name: "scissors",
    path: "icons/scissors.svg",
    alt: "scissors icons",
    value: Option.scissors,
  },
  {
    name: "lizard",
    path: "icons/lizard.svg",
    alt: "lizard icons",
    value: Option.lizard,
  },
  {
    name: "spock",
    path: "icons/spock.svg",
    alt: "spock icons",
    value: Option.spock,
  },
];

// Object that define against what an option win
const actions = {
  [Option.rock]: [Option.scissors, Option.lizard],
  [Option.paper]: [Option.rock, Option.spock],
  [Option.scissors]: [Option.paper, Option.lizard],
  [Option.lizard]: [Option.paper, Option.spock],
  [Option.spock]: [Option.rock, Option.scissors],
};

export enum GameResult {
  tie = "tie",
  win = "win",
  lose = "lose",
}
/**
 * Say who win the game
 * @param choice
 * @param opponentChoice
 * @returns 0 for tie, 1 for win, -1 for lose
 */
function playGame(choice: Option, opponentChoice: Option): GameResult {
  // Check tie
  if (choice === opponentChoice) {
    return GameResult.tie;
  }

  // Check if win
  if (actions[choice].includes(opponentChoice)) {
    return GameResult.win;
  }

  // If no tie or win, it's lose
  return GameResult.lose;
}

function Game({ socket }: GameProps) {
  const [choice, setChoice] = useState<Option>();
  const [opponentChoice, setOppentChoice] = useState<Option>();
  const [gameResult, setGameResult] = useState<GameResult>();

  const handleClick = (pick: Option) => {
    setChoice(pick);
  };

  useEffect(() => {
    if (socket) {
      socket.on("rcv-action", (option, socketId) => {
        if (socket.id !== socketId) {
          setOppentChoice(Option[option as Option]);
        }
      });
    }
  }, [socket]);

  useEffect(() => {
    if (socket && choice) {
      socket.emit("user-action", { choice });
    }
  }, [choice, socket]);

  useEffect(() => {
    if (choice && opponentChoice) {
      setGameResult(playGame(choice, opponentChoice));

      // Reset choices
      setChoice(undefined);
      setOppentChoice(undefined);
    }
  }, [choice, opponentChoice]);

  return (
    <>
      <article className="game">
        {options.map((el) => (
          <section key={el.name} onClick={() => handleClick(el.value)}>
            <Image
              src={el.path}
              width={50}
              height={50}
              alt={el.alt}
              style={{ border: choice === el.value ? "3px solid red" : "none" }}
            />
          </section>
        ))}
      </article>
      <article className="game__result">
        {gameResult === GameResult.tie ? (
          <section>It&apos;s a tie</section>
        ) : null}

        {gameResult === GameResult.win ? <section>You win !</section> : null}

        {gameResult === GameResult.lose ? <section>You lose...</section> : null}
      </article>
    </>
  );
}
