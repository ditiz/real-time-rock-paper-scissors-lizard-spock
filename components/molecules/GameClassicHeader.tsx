import { HeaderAtom } from "../atoms"

interface GameClassicHeaderMoleculeProps {}

const GameClassicHeaderMolecule: React.FC<
  GameClassicHeaderMoleculeProps
> = () => {
  return (
    <HeaderAtom>
      <h1>Rock Paper Scissors</h1>
    </HeaderAtom>
  )
}

export default GameClassicHeaderMolecule
