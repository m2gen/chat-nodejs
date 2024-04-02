const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const io = require("socket.io")(server);
const PORT = 3000;

app.use(express.static('public'));

io.on("connection", (socket) => {
  console.log("ユーザーが接続しました");

  socket.on("chat message", (msg) => {
    io.emit("chat message", msg);
  })

});

server.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
});
