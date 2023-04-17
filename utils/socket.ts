import { Namespace } from "@/types/namespace"
import { Server as NetServer } from "http"
import { Server, Socket } from "socket.io"

let io: Server

export const getIo = (httpServer: NetServer): Server => {
  if (!io) {
    io = new Server(httpServer, {
      path: "/api/socket/init",
      cors: {
        origin: "*",
        methods: ["GET", "POST"],
      },
    })
  }
  return io
}

export const socketGameClassic = (io: Server) => {
  const namespaceIo = io.of(Namespace.classic)
  namespaceIo.on("connection", (socket: Socket) => {
    namespaceIo.emit("new-user", {
      latestConnection: socket.id,
      connectionCount: namespaceIo.sockets.size,
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
      connectionCount: namespaceIo.sockets.size,
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

export const closeIo = () => {
  io.close()
}
