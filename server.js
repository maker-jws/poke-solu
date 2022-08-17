// imports for node app at the top 
const express = require('express')


// app instance
const app = express() 

// app configuration
const PORT = 3000 
// configures our applications template default (.ejs)
app.set('view engine', 'ejs')

// global app state (global variables)
// console.log(app.locals)

// model layer here - data
// importing data from our pokemon module 
// someVar = require('./relative/path/to/file.js')
const pokemon = require('./pokemon.js')
// console.log(pokemon)


// restful routes -
// index route
app.get('/pokemon',(req,res)=>{
    // res.send(pokemon) 
    // refactor res.send -> res.render()

    // context variable - our templates data 
    // data we pass to the template
    const context = { allPokemon: pokemon } 
    // ejs/express template language is expecting an object for res.render
    
    // additional functionality - that will parse or update the data 
    res.render('index.ejs', context)
})

// function index (req,res,next){
//     res.send(pokemon)
// }
// show route 



// server initialization - start it up!
app.listen(PORT, ()=>console.log(`Listening on port: ${PORT}`))
