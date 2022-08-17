// imports for node app at the top 
const { next } = require('cheerio/lib/api/traversing')
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

// MIDDLEWARE - this will run before every request is route

app.use(express.static('public'))

// app.use((req,res,next)=>{
//     console.log('I am running for every request')
//     next()
// })

// app.use('/pokemon', pokemonController)


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

app.get('/pokemon/:poke', (req,res)=>{
    // use res.send to verify data is accessible
    // return res.send(pokemon[req.params.poke]
        // situations where multiple 
            // conditional rendering different views depending on what is sents ()
            // redirect to a different 

    res.render('show.ejs', {pokemon: pokemon[req.params.poke]})
    // testing for /pokemon/0
    // refactor to show.ejs viw
})


// server initialization - start it up!
app.listen(PORT, ()=>console.log(`Listening on port: ${PORT}`))
