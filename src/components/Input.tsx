import {useRef} from "react"
import styles from "./Input.module.css"

export const Input = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <>
      <div>
        <label htmlFor="number">Hodnota</label>
        <input
          ref={inputRef}
          type="number"
          id="number"
          defaultValue={0}
        />
      </div>
      <div>
        <button onClick={() => {console.log(inputRef.current?.value)}}>Hádej</button>
      </div>
    </>
  );
}

export default Input;