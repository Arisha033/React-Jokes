import { useState } from 'react'
import  Joke  from './Components/Joke'
import jokesData from './Components/JokesData'


function App() {

// console.log(jokesData)

const jokeElements = jokesData.map( (joke) => {
  return <Joke
        setup = {joke.setup}
        punchline = {joke.punchline}
   />
 })

  return (
    <>
    <h1>Jokes Hub</h1>
      {jokeElements}
    </>
  )
}

export default App
