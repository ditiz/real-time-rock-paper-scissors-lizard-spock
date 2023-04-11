import Head from "next/head"
import { GameClassicHeaderMolecule } from "../molecules"
import { NavbarOrganism } from "../organisms"

interface GameClassicTemplateProps {}

const GameClassicTemplate: React.FC<GameClassicTemplateProps> = () => {
  return (
    <>
      <NavbarOrganism />

      <Head>
        <title>Rock Paper Scissor</title>
      </Head>

      <GameClassicHeaderMolecule />
    </>
  )
}

export default GameClassicTemplate
