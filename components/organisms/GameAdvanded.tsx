import { GameResult, Option } from "@/types/game"
import { imageOptions, playGame } from "@/utils/game"
import { useEffect, useState } from "react"
import { Socket } from "socket.io-client"
import { DefaultEventsMap } from "socket.io/dist/typed-events"
import { GameTitleAtom } from "../atoms"
import { GameOptionMolecule, GameResultMolecule } from "../molecules"

interface GameOrganismProps {
  socket: Socket<DefaultEventsMap, DefaultEventsMap>
}

function GameAdvandedOrganism({ socket }: GameOrganismProps) {
  const [choice, setChoice] = useState<Option>()
  const [opponentChoice, setOppentChoice] = useState<Option>()
  const [gameResult, setGameResult] = useState<GameResult>()

  useEffect(() => {
    if (socket) {
      socket.on("rcv-action", (option, socketId) => {
        if (socket.id !== socketId) {
          setOppentChoice(Option[option as Option])
        }
      })
    }
  }, [socket])

  useEffect(() => {
    if (socket && choice) {
      socket.emit("user-action", { choice })
    }
  }, [choice, socket])

  useEffect(() => {
    if (choice && opponentChoice) {
      setGameResult(playGame(choice, opponentChoice))

      // Reset choices
      setChoice(undefined)
      setOppentChoice(undefined)
    }
  }, [choice, opponentChoice])

  return (
    <>
      <GameTitleAtom>Choose your move</GameTitleAtom>
      <article className="game">
        {imageOptions.map((el) => (
          <GameOptionMolecule
            key={el.name}
            option={el}
            choice={choice}
            setChoice={setChoice}
          />
        ))}
      </article>
      <GameResultMolecule result={gameResult} />
    </>
  )
}

export default GameAdvandedOrganism
