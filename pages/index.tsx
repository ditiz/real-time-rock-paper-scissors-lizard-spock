import GameOrganism from "@/components/organisms/Game"
import { useEffect, useState } from "react"
import { Socket } from "socket.io"
import SocketIOClient from "socket.io-client"

export default function Home() {
  const [connected, setConnected] = useState<boolean>(false)
  const [nbUser, setNbUser] = useState<number>(0)
  const [socket, setSocket] = useState<Socket>()

  useEffect(() => {
    const url = window.location.host
    const clientSocket = SocketIOClient(url, {
      path: "/api/socket/init",
    })

    setSocket(clientSocket as unknown as Socket)

    // log socket connection
    clientSocket.on("connect", () => {
      setConnected(true)
    })

    // Update the number of user when evetn "new-user" is emited
    clientSocket.on("new-user", (option) => {
      setNbUser(option.connectionCount)
    })

    setTimeout(() => clientSocket.emit("test"), 1000)

    return () => {
      setSocket(undefined)
      clientSocket.close()
    }
  }, [])

  if (!connected) {
    return <>Loading</>
  }

  return (
    <>
      <header>
        <h1>Rock Paper Scissors Lizard Spock</h1>
      </header>
      <main>
        <section>
          {socket && nbUser < 2 ? (
            <article className="game__waiting-message">
              Waiting for another player
            </article>
          ) : (
            <GameOrganism socket={socket as Socket} />
          )}
        </section>
      </main>
    </>
  )
}
