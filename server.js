const express = require("express")
const app = express()
const path = require('path')
const server = require("http").createServer(app)
const io = require('socket.io')(server,{cors:{origin:'*'}})

const PORT = 4000

// app.use(express.static('public'))

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname,"public/index.html"));
 });
 
 //Whenever someone connects this gets executed
 io.on('connection', function(socket) {
    console.log('user_connected',socket.id);
 
    //Whenever someone disconnects this piece of code executed
    socket.on('disconnect', function () {
       console.log('A user disconnected');
    });
 });

server.listen(PORT,()=>{
    console.log(`now listening on port ${PORT}`)
})