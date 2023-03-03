
import { GameResult, Option } from "@/types/game";
import {  options, playGame } from "@/utils/game";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Socket } from "socket.io";
import { DefaultEventsMap } from "socket.io/dist/typed-events";

interface GameProps {
  socket: Socket<DefaultEventsMap, DefaultEventsMap>;
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

export default Game;
