import { GameResult } from "@/types/game"
import { GameResultMolecule } from "."

export default {
  title: "Molecules/Game/Result",
  component: GameResultMolecule,
}

export const Win = () => <GameResultMolecule result={GameResult.win} />
export const Tie = () => <GameResultMolecule result={GameResult.tie} />
export const Lose = () => <GameResultMolecule result={GameResult.lose} />
