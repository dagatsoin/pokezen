# Pokezen

Find them all...

## Features
- search pokemon by name
- display a list of pokemons
- show a details page
- basic live tweets
- show a picture of the pokemon and fall back to its sprite
- compare averate stats
- bookmarkables pages

## Todo
- better live tweets style
- write tests
- finish SAM pattern implementation
- bonus part (left in favor of the cache server)

## Known issues
- Pokezen uses the pokeapi.co which is veeeery slow. So I wrote a cache server which use a wrapper to have a better UX. Despite of that, new Pokemon page may take forever to display.
- the live tweet does not always work
- some pokemon pictures could miss

## Coding Intention

This project is intented to show my commitment ability from a lead dev point of view.
The main effort has been to architecture the project to:
- allow new members to quickly be productive.
- quick iterate on simple code modules

## Bootstraping
This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app) to prevent the
headhaches of Webpack/Typescript/etc. configuration which can eat a day or two...

## Typescript
This project use typescript. This choice is part of my deliberate choice as I am the only member of this team. 
I wanted to spot the maximum of potential thanks to the static type system before running into the browser.

## Pattern
As the test is about the coding skill, instead of using redux, I chose to write a mostly-finished\* implementation of the SAM pattern. It is a functional loop described in details here http://sam.js.org/.
I choose this pattern for :
- its habiliy to solve a big problem: where do I put this code????
- reusability: each component are decoupled. We can bind any action on the model or any view to the state.
- rapid onboarding: the pattern offers strong single responsability principle so a new member could quickly write code without knowing the entire app architeture.
- modulable: Each component could be used on the server or the client or both. (here I use them on the client only)

\* need to implement the mutation system instead of mutation the model directly (which is violate the pattern principle)

## Server
 The server source code is here: https://bitbucket.org/dagatsoin/pokecache