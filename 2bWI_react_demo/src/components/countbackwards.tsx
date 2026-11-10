import { useState } from "react";

type Props = {
  start: number;
};

export default function CountBackwards({ start }: Props) {
  const [counter, setCounter] = useState<number>(start);

  function handleClick() {
    const newValue: number = counter - 4;
    setCounter(newValue);
    console.log(newValue);
  }

  return (
    <div className="card">
      <h2>Countdown</h2>
      <p>Aktueller Wert: {counter}</p>
      <button onClick={handleClick}>-4</button>
    </div>
  );
}
