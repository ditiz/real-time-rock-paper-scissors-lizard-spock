import { routes } from "@/utils/navigation"
import { GameSelectionOptionMolecule } from "../molecules"
import styles from "./GameSelection.module.css"

interface GameSelectionOrganismProps {}

const GameSelectionOrganism: React.FC<GameSelectionOrganismProps> = () => {
  return (
    <section className={styles["game-selection"]}>
      <GameSelectionOptionMolecule name={"Game Classic"} link={routes.classic}>
        <p>Classic game of rock, paper, scissors</p>
      </GameSelectionOptionMolecule>
      <GameSelectionOptionMolecule
        name={"Game Advanced"}
        link={routes.advanced}
      >
        <p>Game of rock, paper, scissors, lizard, spock</p>
      </GameSelectionOptionMolecule>
    </section>
  )
}

export default GameSelectionOrganism
