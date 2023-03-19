import { HeaderAtom } from "../atoms"

interface HeaderMoleculeProps {}

const HeaderMolecule: React.FC<HeaderMoleculeProps> = () => {
  return (
    <HeaderAtom>
      <h1>Rock Paper Scissors Lizard Spock</h1>
    </HeaderAtom>
  )
}

export default HeaderMolecule
