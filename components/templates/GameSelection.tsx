import { routes } from "@/utils/navigation"
import Head from "next/head"
import { GameSelectionOptionMolecule } from "../molecules"
import { NavbarOrganism } from "../organisms"

interface GameSelectionTemplateProps {}

const GameSelectionTemplate: React.FC<GameSelectionTemplateProps> = () => {
  return (
    <>
      <NavbarOrganism />

      <Head>
        <title>Game Selection</title>
      </Head>

      <h1>Game selection</h1>

      <section
        style={{ display: "flex", gap: "1rem", justifyContent: "center" }}
      >
        <GameSelectionOptionMolecule
          name={"Game Classic"}
          link={routes.classic}
        >
          <p>Classic game of rock, paper, scissors</p>
        </GameSelectionOptionMolecule>
        <GameSelectionOptionMolecule
          name={"Game Advanced"}
          link={routes.advanced}
        >
          <p>Game of rock, paper, scissors, lizard, spock</p>
        </GameSelectionOptionMolecule>
      </section>
    </>
  )
}

export default GameSelectionTemplate
