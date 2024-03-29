import { useEffect, useState } from "react"
import { Manager, Socket } from "socket.io-client"

const useCreateSocket = (namespace: string) => {
  const [connected, setConnected] = useState<boolean>(false)
  const [nbUser, setNbUser] = useState<number>(0)
  const [socket, setSocket] = useState<Socket>()

  useEffect(() => {
    const url = window.location.host

    const manager = new Manager(url, {
      path: "/api/socket/init",
    })

    const clientSocket = manager.socket(namespace)

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
