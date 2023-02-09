import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";
import { io } from "socket.io-client";
import {
  afterAll,
  afterEach,
  beforeAll,
  beforeEach,
  describe,
  expect,
  test,
} from "vitest";

describe("testing socket connections", () => {
  let ioClient: any;
  let httpServer: any;
  let httpServerAddr: any;
  let ioServer: Server;

  beforeAll(() => {
    const app = express();
    httpServer = createServer(app).listen();
    httpServerAddr = httpServer.address();
    ioServer = new Server(httpServer);
  });

  afterAll(() => {
    ioServer.close();
    httpServer.close();
  });

  beforeEach(() => {
    // Setup
    ioClient = io(`http://[${httpServerAddr.address}]:${httpServerAddr.port}`);
    ioClient.on("connect", () => console.log("connected"));
  });

  afterEach(() => {
    // Cleanup
    if (ioClient.connected) ioClient.disconnect();
  });

  test("should communicate", () => {
    ioServer.emit("echo", "Hello World");
    ioClient.once("echo", (message: string) =>
      expect(message).toBe("Hello World")
    );
    ioServer.on("connection", (mySocket) => expect(mySocket).toBeDefined());
  });
});
