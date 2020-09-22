const express = require('express')
const app = express()
const mongoose = require('mongoose');

require('./server/config/mongoose')

app.use(express.static(__dirname + "/dnd/dist/dnd"))
app.use(express.json())
app.use(express.urlencoded({extended: true}));


require('./server/config/routes')(app, __dirname + "/dnd/dist/dnd")


app.listen(8000, () => console.log("Listening on port 8000"))