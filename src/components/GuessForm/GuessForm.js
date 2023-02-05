import React from 'react'

function GuessForm({ handleSubmitGuess, wonGame, lostGame }) {
  const [tentativeGuess, setTentativeGuess] = React.useState('')

  function handleSubmit(event) {
    event.preventDefault()
    handleSubmitGuess(tentativeGuess)
    setTentativeGuess('')
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)} className="guess-input-wrapper">
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        value={tentativeGuess}
        disabled={wonGame || lostGame}
        onChange={(e) => setTentativeGuess(e.target.value.toUpperCase())}
        id="guess-input"
        type="text"
        required
        pattern="[a-zA-Z]{5}"
        title="5 letter word"
      />
    </form>
  )
}

export default GuessForm
