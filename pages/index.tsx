import { HeaderMolecule, WaitingPlayerMolecule } from "@/components/molecules"
import { NavbarOrganism } from "@/components/organisms"
import GameOrganism from "@/components/organisms/Game"
import useCreateSocket from "@/hooks/useCreateSocket"
import Head from "next/head"
import { Socket } from "socket.io"

export default function Home() {
  const { connected, nbUser, socket } = useCreateSocket()
  if (!connected) {
    return <>Loading</>
  }

  return (
    <>
      <NavbarOrganism />

      <Head>
        <title>Rock Paper Scissor Lizard Spock</title>
      </Head>

      <HeaderMolecule />

      <main>
        {socket && nbUser < 2 ? (
          <WaitingPlayerMolecule />
        ) : (
          <GameOrganism socket={socket as Socket} />
        )}
      </main>
    </>
  )
}
