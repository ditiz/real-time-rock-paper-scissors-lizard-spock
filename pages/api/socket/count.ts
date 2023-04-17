import { getIo } from "@/utils/socket"
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
  let io = res.socket.server.io
  if (!io) {
    // adapt Next's net Server to http Server
    const httpServer: NetServer = res.socket.server
    io = getIo(httpServer)
  }

  let nb = (io.engine as unknown as Record<string, unknown>).clientsCount
  // append SocketIO server to Next.js socket server response
  res.socket.server.io = io
  res.status(200).json(nb)
}
