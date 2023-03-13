const express = require("express");
const app = express();
const morgan = require("morgan");
const cors = require("cors")
const path = require("path");
const commandRouter = require("./routes/commands");
const db = require("./src/models");
const server = require("http").createServer(app);
const io = require("socket.io")(server, { cors: { origin: "*" } });
require("dotenv").config();
// const connect = require("./database/connect")

// const PORT = 4000



(async () => {
  await db.sequelize.sync();
})();

//middlewares
app.use(morgan("dev"));
app.use(cors())
app.use(express.json());

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "public/index.html"));
});

app.use("/api/v1/command", commandRouter);

//Whenever someone connects this gets executed
io.on("connection", function (socket) {
  console.log("user_connected", socket.id);

  //Whenever someone disconnects this piece of code executed
  socket.on("disconnect", function () {
    console.log("A user disconnected");
  });
});

const PORT = 4000;
server.listen(PORT, () => {
  console.log(`now listening on port ${PORT}`);
});
