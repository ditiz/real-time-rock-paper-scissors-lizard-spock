import Game from "@/component/Game";
import { useEffect, useState } from "react";
import { Socket } from "socket.io";
import SocketIOClient from "socket.io-client";

export default function Home() {
  const [connected, setConnected] = useState<boolean>(false);
  const [nbUser, setNbUser] = useState<number>(0);
  const [io, setIo] = useState<Socket>();

  useEffect(() => {
    if (!io) {
      const url = window.location.host;
      const io = SocketIOClient(url, {
        path: "/api/socket/init",
      });

      setIo(io as unknown as Socket);

      // log socket connection
      io.on("connect", () => {
        setConnected(true);
      });

      // Update the number of user when evetn "new-user" is emited
      io.on("new-user", (option) => {
        setNbUser(option.connectionCount);
      });

      setTimeout(() => io.emit("test"), 1000);

      return () => {
        setIo(undefined);
        io.close();
      };
    }
  }, []);

  return (
    <main>
      <section>{connected ? "connected" : "not connected"}</section>
      <section>number of users {nbUser}</section>

      <section>
        {io && nbUser < 2 ? (
          "Waiting for another player"
        ) : (
          <Game socket={io as Socket} />
        )}
      </section>
    </main>
  );
}
