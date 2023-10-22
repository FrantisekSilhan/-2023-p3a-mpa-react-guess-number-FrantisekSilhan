export const AttemptDisplay = ({guessedValue, hidden, attempt}: {guessedValue : number, hidden : number, attempt : number}) => {
  if (attempt === 0) return ( <p>Zadej číslo</p> );
  if (guessedValue === hidden) {
    return (
      <p>Uhodl jsi</p>
    );
  } else if (guessedValue > hidden) {
    return (
      <p>hádej menší</p>
    );
  } else {
    return (
      <p>hádej větší</p>
    );
  }
}

export default AttemptDisplay;