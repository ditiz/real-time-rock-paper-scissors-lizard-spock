import { GameResult, Option } from "@/types/game";
import { imageOptions, playGame } from "@/utils/game";
import { useEffect, useState } from "react";
import { Socket } from "socket.io";
import { DefaultEventsMap } from "socket.io/dist/typed-events";
import DisplayGameResult from "./DisplayGameResult";
import { GameOption } from "./GameOption";

interface GameProps {
  socket: Socket<DefaultEventsMap, DefaultEventsMap>;
}

function Game({ socket }: GameProps) {
  const [choice, setChoice] = useState<Option>();
  const [opponentChoice, setOppentChoice] = useState<Option>();
  const [gameResult, setGameResult] = useState<GameResult>();

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
      <h2 className="game__title">Choose your move</h2>
      <article className="game">
        {imageOptions.map((el) => (
          <GameOption
            key={el.name}
            option={el}
            choice={choice}
            setChoice={setChoice}
          />
        ))}
      </article>
      <DisplayGameResult result={gameResult} />
    </>
  );
}

export default Game;
