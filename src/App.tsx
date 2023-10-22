import { useState } from 'react'
import './App.css'
import Input from "./components/Input"
import AttemptDisplay from "./components/AttemptDisplay"

function App() {
  const number = Math.floor(Math.random() * 100);
  const [guessedValue, setGuessedValue] = useState<number>(0);
  const [hidden, setHidden] = useState<number>(number);
  const [attempt, setAttempt] = useState<number>(0);

  const GuessValue = (value : number) => {
    setAttempt(attempt + 1);
    setGuessedValue(value)
  }

  const Reset = () => {
    setHidden(Math.floor(Math.random() * 100));
    setAttempt(0);
    setGuessedValue(0);
  }

  if (hidden === guessedValue) {
    return (
      <>
        <div>Uhodl jsi na {attempt} pokus</div>
        <button onClick={() => Reset()}>Restartovat</button>
      </>
    )
  } else {
    return (
      <>
        <AttemptDisplay guessedValue={guessedValue} hidden={hidden} attempt={attempt}/>
        <Input value={guessedValue} setValue={GuessValue} />
      </>
    )

  }


}

export default App