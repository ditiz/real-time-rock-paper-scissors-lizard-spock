import { Namespace } from "@/types/namespace"
import { Server, Socket } from "socket.io"

export const socketGameClassic = (io: Server) => {
  const namespaceIo = io.of(Namespace.classic)
  namespaceIo.on("connection", (socket: Socket) => {
    namespaceIo.emit("new-user", {
      latestConnection: socket.id,
      connectionCount: (io.engine as unknown as Record<string, unknown>)
        .clientsCount,
    })

    socket.on("user-action", (args) => {
      console.info("user-action", args.choice)
      namespaceIo.emit("rcv-action", args.choice, socket.id)
    })

    socket.on("disconnect", () => {
      console.info("a user disconnected")
    })
  })
}

export const socketGameAdvanced = (io: Server) => {
  const namespaceIo = io.of(Namespace.advanced)
  namespaceIo.on("connection", (socket: Socket) => {
    namespaceIo.emit("new-user", {
      latestConnection: socket.id,
      connectionCount: (io.engine as unknown as Record<string, unknown>)
        .clientsCount,
    })

    socket.on("user-action", (args) => {
      console.info("user-action", args.choice)
      namespaceIo.emit("rcv-action", args.choice, socket.id)
    })

    socket.on("disconnect", () => {
      console.info("a user disconnected")
    })
  })
}
