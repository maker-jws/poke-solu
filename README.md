![GA Logo](https://camo.githubusercontent.com/6ce15b81c1f06d716d753a61f5db22375fa684da/68747470733a2f2f67612d646173682e73332e616d617a6f6e6177732e636f6d2f70726f64756374696f6e2f6173736574732f6c6f676f2d39663838616536633963333837313639306533333238306663663535376633332e706e67)

# POKE EXPRESS

Make a Pokemon app that displays data inside server-side rendered views.

## App

User Stories
- When a user goes to the '/pokemon' route they will see an `index` of pokemon: the names of each pokemon rendered to the page.
- When a user clicks on the name of the pokemon, they will be taken to that pokemon's `show` page, and will see the pokemon's name and image.


### Set up your server

- Create an express app that listens on port 3000. Ensure that you have installed the necessary npm packages to run an express server and render templates. You can refer back to old code and lessons, but try to recall the necessary steps before checking in old code. 

<hr>
 &#x1F534; The commit message should read: <br>
 "Commit 1 - My server is set up and running"
<hr>


### Set up your _'database'_
- Create a file called `pokemon.js`
- Inside of this file, put the following array of pokemon objects. This is your 'database' for tonight's homework

```javascript
const pokemon = [ 
  {
    name: "Bulbasaur", 
    img: "http://img.pokemondb.net/artwork/bulbasaur.jpg"
  },
  {
    name: "Ivysaur", 
    img: "http://img.pokemondb.net/artwork/ivysaur.jpg"
  },
  {
    name: "Venusaur", 
    img: "http://img.pokemondb.net/artwork/venusaur.jpg"
  },
  {
    name: "Charmander", 
    img: "http://img.pokemondb.net/artwork/charmander.jpg"
  },
  {
    name: "Charizard", 
    img: "http://img.pokemondb.net/artwork/charizard.jpg"
  },
  {
    name: "Squirtle", 
    img: "http://img.pokemondb.net/artwork/squirtle.jpg"
  },
  {
    name: "Wartortle", 
    img: "http://img.pokemondb.net/artwork/wartortle.jpg"
  }
];

```
- Set up your 'database' so that it can be exported to your `server.js` and then be required by your `server.js`

- create a get route `/pokemon` that will `res.send(pokemon)`, which will display your pokemon data as json in the browser

<hr>
&#x1F534; The commit message should read: <br>
"Commit 2 - Connected my database, can see json in the browser"
<hr>

### Set up your index view

- Instead of displaying json at your `/pokemon` route, you should serve an `index.ejs` file that displays a list of all the pokemon. Put the pokemon inside a `<ul>` with class name `pokemon`. 

- Add some style to your list with a style tag, or, for an added challenge, look up how to serve static files in an express app and use a separate css file instead.
  
- **Stretch step, not required** : Choose a google font and add it to your html and inside your `<style>` tag

<hr>
  &#x1F534; The commit message should read: <br>
  "Commit 3 - index.ejs view rendered at pokemon route"
<hr>

### Set up your show route

- Inside your `server.js`, add a new get route `/pokemon/:id`
- This route should serve a template called `show.ejs` which displays the information of a specific pokemon according to their index in the pokemon array. For example, `/pokemon/0` should display the 0 indexed pokemon.
- You may want to look up how to access route parameters in express.

<hr>
   &#x1F534; The commit message should read: <br>
   "Commit 4 - show view shows pokemon details "
<hr>


### Link your `index.ejs` to your `show.ejs`
 - inside your `index.ejs`,
 - for each pokemon, add an `<a>` tag that will have an `href` that goes to the route `/pokemon/x`, where x is the array position of the `pokemon` in the data array. This should be set dynamically with ejs
 - when you click the link you should go to your show route and the index number corresponding to the pokemon's array position should be displayed

<hr>
   &#x1F534; The commit message should read: <br>
   "Commit 5 - added dynamic anchor tags to index.ejs "
<hr>

### Style your app, step 1: static

 - Set up your app to be able to use CSS like we did in class.  Use a dummy (i.e. just set a background color) CSS declaration.  Remember: you need express.static() middleware. (also remember that you don't need to npm install anything for this particular middleware because its part of express. But for others you do.)

<hr>
&#x1F534; The commit message should read: <br>
  "Commit 6 - set up serving of static files so we can add CSS"
<hr>

### Style your app 

<hr>
&#x1F534; The commit message should read: <br>
  "Commit 7 - The app is styled"
<hr>

## You finished!  Nice work. Submit your homework

You can run `npm test` to confirm your app's functionality matches specs- be sure to export the app at the bottom of your server file so the tests can import it.  

# Hungry for more? 

### Complete CRUD functionality

Set up routes and templates to allow for full CRUD functionality. 

- Users should be able to insert a new pokemon into the array using a form on a `new.ejs` page. Creation should be handled via a POST route to the `/pokemon` route.
- Users should be able to edit an individual pokemon on an `edit.ejs` page accessed from the  `/pokemon/:id/edit` route. The updating should be handled via a POST request to the `/pokemon/:id` route.
- Users should be able to delete a pokemon using a button provided on the show and index pages.
- The final app should have what are known as the 7 RESTful routes. 
- After you have full CRUD functionality on your Pokemon Express App start practing your CSS. Use Flexbox to display your pokemon links as cards using a 'three-column' layout. Example: [here](https://snippets.wrappixel.com/simple-feature-with-bootstrap/)
## Hungry for more?

1. Style your application using one of the follow css libraries:
  - [Bootstrap!](https://getbootstrap.com/docs/4.1/getting-started/introduction/) - you have already covered this one
  - [Skeleton](http://getskeleton.com/)
  - [Bulma](https://bulma.io/documentation/overview/start/)

### Still hungry for more? 

1. Refactor your app (go back and update features on your current application) with a more complicated dataset and complex UI. You can follow this [Pokedex](https://git.generalassemb.ly/seir-1213/pokedex-hfm) readme for guidelines. 

1. Learn more about Pseudo Selectors to become a CSS Genius
  - [pseudo selector links](https://www.youtube.com/watch?v=YMZGPqNDn_s&list=PLdnONIhPScST0Vy4LrIZiYKpFNoxgyH7J&index=17) ~ 5 minutes
  - [pseudo selector children](https://www.youtube.com/watch?v=tMCahu7H-fA&list=PLdnONIhPScST0Vy4LrIZiYKpFNoxgyH7J&index=18) ~ 4 minutes
  - [pseudo selector n-th child](https://www.youtube.com/watch?v=yFmwjX9oGt8&list=PLdnONIhPScST0Vy4LrIZiYKpFNoxgyH7J&index=19) ~ 3 minutes
  - [pseudo selector sibling status and `not()`](https://www.youtube.com/watch?v=XyXUjEP9m-8&list=PLdnONIhPScST0Vy4LrIZiYKpFNoxgyH7J&index=20) ~ 5 minutes
  - a little glitchy, but [See just how deeply nerdy some people get about CSS](https://css-tricks.com/roman-empire-made-pure-css-connect-4-possible/)

