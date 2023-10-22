import {useRef} from "react"

export const Input = ({value, setValue}: {value: number, setValue: (value : number) => void}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <>
      <div>
        <label htmlFor="number">Hodnota</label>
        <input
          ref={inputRef}
          type="number"
          id="number"
          defaultValue={value}
        />
      </div>
      <div>
        <button onClick={() => {console.log(inputRef.current?.value); setValue(Number(inputRef.current?.value))}}>Hádej</button>
      </div>
    </>
  );
}

export default Input;