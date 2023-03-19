import { WaitingMessageAtom } from "../atoms"

interface WaitingPlayerMoleculeProps {}

const WaitingPlayerMolecule: React.FC<WaitingPlayerMoleculeProps> = () => {
  return <WaitingMessageAtom message="Waiting for another player" />
}

export default WaitingPlayerMolecule
