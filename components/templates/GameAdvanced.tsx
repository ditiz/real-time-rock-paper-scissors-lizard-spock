import {
  GameAdvancedHeaderMolecule,
  WaitingPlayerMolecule,
} from "@/components/molecules"
import { NavbarOrganism } from "@/components/organisms"
import GameAdvandedOrganism from "@/components/organisms/GameAdvanded"
import { useCreateSocket } from "@/hooks"
import { Namespace } from "@/types/namespace"
import Head from "next/head"
import { Socket } from "socket.io"
import { LoadingAtom } from "../atoms"

interface GameAdvancedTemplateProps {}

const GameAdvancedTemplate: React.FC<GameAdvancedTemplateProps> = () => {
  const { connected, nbUser, socket } = useCreateSocket(Namespace.advanced)

  return (
    <>
      <NavbarOrganism />

      <Head>
        <title>Rock Paper Scissor Lizard Spock</title>
      </Head>

      <GameAdvancedHeaderMolecule />

      <main>
        {!connected ? (
          <LoadingAtom />
        ) : (
          <>
            {socket && nbUser < 2 ? (
              <WaitingPlayerMolecule />
            ) : (
              <GameAdvandedOrganism socket={socket as Socket} />
            )}
          </>
        )}
      </main>
    </>
  )
}

export default GameAdvancedTemplate
