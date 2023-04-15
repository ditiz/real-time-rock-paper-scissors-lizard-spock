import { useCreateSocket } from "@/hooks"
import { Namespace } from "@/types/namespace"
import Head from "next/head"
import { LoadingAtom } from "../atoms"
import { GameClassicHeaderMolecule, WaitingPlayerMolecule } from "../molecules"
import { NavbarOrganism } from "../organisms"

interface GameClassicTemplateProps {}

const GameClassicTemplate: React.FC<GameClassicTemplateProps> = () => {
  const { connected, nbUser, socket } = useCreateSocket(Namespace.classic)

  return (
    <>
      <NavbarOrganism />

      <Head>
        <title>Rock Paper Scissor</title>
      </Head>

      <GameClassicHeaderMolecule />

      <main>
        {!connected ? (
          <LoadingAtom />
        ) : (
          <>{socket && nbUser < 2 ? <WaitingPlayerMolecule /> : "Game"}</>
        )}
      </main>
    </>
  )
}

export default GameClassicTemplate
