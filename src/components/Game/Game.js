import React from 'react'
import GuessForm from '../GuessForm'
import RenderedGuesses from '../RenderedGuesses/'

import { sample } from '../../utils'
import { WORDS } from '../../data'

// Pick a random word on every pageload.
const answer = sample(WORDS)
// To make debugging easier, we'll log the solution in the console.
console.info({ answer })

function Game() {
  const [guesses, setGuesses] = React.useState([])
  const [wonGame, setWonGame] = React.useState(false)
  const [lostGame, setLostGame] = React.useState(false)

  function handleSubmitGuess(tentativeGuess) {
    setGuesses([...guesses, tentativeGuess])
    if (tentativeGuess === answer) {
      setWonGame(true)
    } else if (guesses.length >= 5) {
      setLostGame(true)
    }
  }

  return (
    <>
      {wonGame && (
        <div className="happy banner">
          <p>
            <strong>Congratulations!</strong> Got it in
            <strong>{` ${guesses.length} ${
              guesses.length === 1 ? `guess` : `guesses`
            }`}</strong>
            .
          </p>
        </div>
      )}
      {lostGame && (
        <div className="sad banner">
          <p>
            Sorry, the correct answer is <strong>{answer}</strong>.
          </p>
        </div>
      )}
      <RenderedGuesses guesses={guesses} answer={answer} />
      <GuessForm
        handleSubmitGuess={handleSubmitGuess}
        wonGame={wonGame}
        lostGame={lostGame}
      />
    </>
  )
}

export default Game
