import { useEffect, useState } from "react"
import { Socket } from "socket.io"
import SocketIOClient from "socket.io-client"

const useCreateSocket = () => {
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

  return { connected, nbUser, socket }
}

export default useCreateSocket
