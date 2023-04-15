import { socketGameAdvanced, socketGameClassic } from "@/utils/socket"
import { Server as NetServer } from "http"
import { Socket } from "net"
import { NextApiRequest, NextApiResponse } from "next"
import { Server as ServerIO } from "socket.io"

export type NextApiResponseServerIO = NextApiResponse & {
  socket: Socket & {
    server: NetServer & {
      io: ServerIO
    }
  }
}

export const config = {
  api: {
    bodyParser: false,
  },
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponseServerIO
) {
  if (!res.socket.server.io) {
    console.info("New Socket.io server...")
    // adapt Next's net Server to http Server
    const httpServer: NetServer = res.socket.server
    const io = new ServerIO(httpServer, {
      path: "/api/socket/init",
      cors: {
        origin: "*",
        methods: ["GET", "POST"],
      },
    })

    socketGameClassic(io)
    socketGameAdvanced(io)

    // append SocketIO server to Next.js socket server response
    res.socket.server.io = io
  }
  res.end()
}
