import express from "express";
import dotenv from "dotenv";
import http from "http";
import { Server } from "socket.io";
import cors from 'cors'

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001; 
const server = http.createServer(app);
const io = new Server(server);
app.use(cors())
io.on("connection", (socket) => {
  console.log("A user connected");

  socket.on("vote", (optionId: string) => {
    io.emit("updateVotes", {
      /*updated vote data */
    });
  });

  socket.on("disconnect", () => {
    console.log("A user disconnected");
  });
});
// Middlewares
app.use(express.json());

// Routes

app.use(
  (
    err: Error,
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    console.error(err.stack);
    res.status(500).send("Something broke!");
  }
);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
