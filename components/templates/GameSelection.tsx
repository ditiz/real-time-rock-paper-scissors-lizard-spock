import Head from "next/head"
import { GameSelectionOrganism, NavbarOrganism } from "../organisms"

interface GameSelectionTemplateProps {}

const GameSelectionTemplate: React.FC<GameSelectionTemplateProps> = () => {
  return (
    <>
      <NavbarOrganism />

      <Head>
        <title>Game Selection</title>
      </Head>

      <h1>Game selection</h1>

      <GameSelectionOrganism />
    </>
  )
}

export default GameSelectionTemplate
