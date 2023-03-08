import { GameResult } from "@/types/game"
import { GameResultAtom } from "../atoms"

interface GameResultMoleculeProps {
  result: GameResult | undefined
}

const GameResultMolecule: React.FC<GameResultMoleculeProps> = ({
  result: result,
}) => {
  // If no result, we display nothing
  if (!result) {
    return <></>
  }

  return (
    <>
      {result === GameResult.tie ? (
        <GameResultAtom>It&apos;s a tie</GameResultAtom>
      ) : null}

      {result === GameResult.win ? (
        <GameResultAtom>You win !</GameResultAtom>
      ) : null}

      {result === GameResult.lose ? (
        <GameResultAtom>You lose...</GameResultAtom>
      ) : null}
    </>
  )
}

export default GameResultMolecule
