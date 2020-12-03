const express = require('express')
const app = express()
PORT = process.env.PORT || 8000
require('./db')
// Import Routes
const Bookroutes = require("./routes/bookRoute")
app.use(express.json());


// Route Middlewere
app.use(Bookroutes)


app.listen(PORT, ()=>{
    console.log("server started")
})