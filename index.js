require('dotenv').config()
const express = require('express')
const cors = require('cors')
require('./db/connection')
const router = require('./routes/router')

// create server
const server = express()

server.use(cors())
server.use(express.json())
// export upload folder as a static file / folder
server.use('/uploads', express.static('./uploads'))
server.use(router)

const PORT = 4000 || process.env.PORT

server.listen(PORT,() => {
    console.log(`Gallery Server Started at ${PORT}`);
})

server.get('/', (req,res) => {
    res.send('Gallery Server Started')
})