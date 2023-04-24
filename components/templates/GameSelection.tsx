import Head from "next/head"
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

      <section>
        <article>Game classic</article>
        <article>Game Advanced</article>
      </section>
    </>
  )
}

export default GameSelectionTemplate
