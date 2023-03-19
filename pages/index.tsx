import { WaitingPlayerMolecule } from "@/components/molecules"
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
      <Head>
        <title>Rock Paper Scissor Lizard Spock</title>
      </Head>

      <header>
        <h1>Rock Paper Scissors Lizard Spock</h1>
      </header>

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
