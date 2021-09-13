// React stuff
import React, { useState } from "react"

// Component stuff
import Header from "./Header"
import StartMenu from "./StartMenu"
import Game from "./Game"

const App = () => {
  const [playState, setPlayState] = useState(false)
  const [player, setPlayer] = useState({ name: null, highScore: null })


  return (
    <>
      <Header />
      <div className="main-container">
        {playState ? <Game setPlayState={setPlayState} /> : <StartMenu player={player} setPlayState={setPlayState} />}
      </div>
    </>
  )
}

export default App
