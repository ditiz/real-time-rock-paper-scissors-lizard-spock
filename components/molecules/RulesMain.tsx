import { TextAtom } from "../atoms"

interface RulesMainMoleculeProps {}

const RulesMainMolecule: React.FC<RulesMainMoleculeProps> = () => {
  return (
    <TextAtom>
      The game is an expansion on the game Rock, Paper, Scissors. Each player
      picks a variable and reveals it at the same time. The winner is the one
      who defeats the others. In a tie, the process is repeated until a winner
      is found.
    </TextAtom>
  )
}

export default RulesMainMolecule
