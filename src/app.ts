import "reflect-metadata";
import "express-async-errors";
import { PORT, Server } from "./config";

const server = new Server({
  port: PORT,
});

server.start();
