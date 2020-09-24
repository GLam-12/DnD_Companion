const { Socket } = require('dgram');
const express = require('express')
const app = express()
const mongoose = require('mongoose');
const http = require('http').createServer(app)
const io = require('socket.io')(http)
const session = require('express-session');

app.set('trust proxy', 1) // trust first proxy
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
}))

require('./server/config/mongoose')

app.use(express.static(__dirname + "/dnd/dist/dnd"))
app.use(express.json())
app.use(express.urlencoded({extended: true}));

io.on('connection', (socket) =>{
    console.log('user connected')
    socket.emit("welcome", "welcome to the server")
    socket.on('roll_20', (data)=>{
        console.log('20 sided rand int received', data)
        io.emit('roll_20 to share', data)
    })
    socket.on('roll_6', (data )=> {
        console.log('6 sided dice received', data)
        io.emit('roll_6 to share', data)
    })
    socket.on('roll_4', (data) =>{
        console.log('4 sided dice received', data)
        io.emit('roll_4 to share', data)
    })
    socket.on('roll_12', (data) =>{
        console.log('12 sided dice received', data)
        io.emit('roll_12 to share', data)
    })
    socket.on('roll_10', (data)=>{
        console.log('10 sided dice received', data)
        io.emit('roll_10 to share', data)
    })
    socket.on('roll_8', (data)=>{
        console.log('8 sided dice received', data)
        io.emit('roll_8 to share', data)
    })
})

require('./server/config/routes')(app, __dirname + "/dnd/dist/dnd")


http.listen(8000, () => console.log("Listening on port 8000"))