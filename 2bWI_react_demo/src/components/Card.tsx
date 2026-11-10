import { useState } from "react";

type Props = {
  title: string;
  text: string;
  image: string;
};


const words = ["Ippon", "Wazaari", "Hajime", "Matte", "Osaekomi", "Judoka", "Tatami", "Sensei", "Randori", 
  "Judogi", "Dojo", "Kata", "Rei", "Ukemi", "Shiai"];

export default function Card({ title, text, image }: Props) {
  const [random, setRandom] = useState<number>(Math.random());
  const [counter, setCounter] = useState<number>(0);

  const randomtext: string = `Ranglist ${Math.floor(random * 10) + 1}`;
  const randomWord: string = words[Math.floor(Math.random() * words.length)];

  function handleCardClick() {
    alert("You clicked " + title);
    const newValue: number = counter + 1;
    setCounter(newValue);
    console.log(newValue);
  }

  function handleChangeImage() {
    setRandom(Math.random());
  }

  return (
    <div className="card" onClick={handleCardClick}>
      <h2>{title}</h2>
      <img src={image + "?id=" + random} alt={title} />
      <p>{randomWord}</p>
      <p>Amount of clicks: {counter}</p>
      <p>{randomtext}</p>
      <button onClick={handleChangeImage}>change image</button>
    </div>
  );
}
