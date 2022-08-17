// imports for node app at the top 
const express = require('express')


// app instance
const app = express() 

// app configuration
const PORT = 3000 


// model layer here - data
// importing data from our pokemon module 
// someVar = require('./relative/path/to/file.js')
const pokemon = require('./pokemon.js')
// console.log(pokemon)


// restful routes -
// index route
app.get('/pokemon',index)

function index (req,res,next){
    res.send(pokemon)
}
// show route 



// server initialization - start it up!
app.listen(PORT, ()=>console.log(`Listening on port: ${PORT}`))
