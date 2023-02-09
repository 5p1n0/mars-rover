import { socket } from "@mr/frontend-core-socket";
import { useEffect, useMemo, useState } from "react";

/**
 * Returns the server connection state.
 *
 * @remarks
 * Also defines a socket event to auto-update the connection state when it changes.
 */
export const useConnectedState = () => {
  const [connected, setConnected] = useState(false);

  useEffect(() => {
    socket.on("connect", () => setConnected(socket.connected));
    socket.on("disconnect", () => setConnected(socket.connected));

    return () => {
      socket.off("connect");
      socket.off("disconnect");
    };
  }, []);

  return useMemo(() => connected, [connected]);
};
