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

export enum Choice {
  rock = "rock",
  paper = "paper",
  scissors = "scissors",
  lizard = "lizard",
  spock = "spock",
}

interface GameProps {
  socket: Socket<DefaultEventsMap, DefaultEventsMap>;
}

const choices = [
  {
    name: "rock",
    path: "icons/rock.svg",
    alt: "rock icons",
    value: Choice.rock,
  },
  {
    name: "paper",
    path: "icons/paper.svg",
    alt: "paper icons",
    value: Choice.paper,
  },
  {
    name: "scissors",
    path: "icons/scissors.svg",
    alt: "scissors icons",
    value: Choice.scissors,
  },
  {
    name: "lizard",
    path: "icons/lizard.svg",
    alt: "lizard icons",
    value: Choice.lizard,
  },
  {
    name: "spock",
    path: "icons/spock.svg",
    alt: "spock icons",
    value: Choice.spock,
  },
];

function Game({ socket }: GameProps) {
  const [choice, setChoice] = useState<Choice>();

  const handleClick = (pick: Choice) => {
    setChoice(pick);
  };

  useEffect(() => {
    if (socket) {
      socket.on("rcv-action", (args) => {
        console.log(args);
      });
    }
  }, [socket]);

  useEffect(() => {
    if (socket && choice) {
      socket.emit("user-action", { choice });
    }
  }, [choice, socket]);

  return (
    <article className="game">
      {choices.map((el) => (
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
  );
}
