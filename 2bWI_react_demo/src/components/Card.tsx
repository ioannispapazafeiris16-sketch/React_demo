type Props = {
  title: string;
  text: string;
  image: string;
};

const words: string[] = [
  "Ippon",
  "Waza-ari",
  "Hajime",
  "Matte",
  "Seoi-nage",
  "Uchi-mata",
  "Osoto-gari",
  "Judoka",
  "Tatami",
  "Sensei",
  "Randori",
  "Kumikata",
];

function getRandomWord(): string {
  const index: number = Math.floor(Math.random() * words.length);
  return words[index];
}

export default function Card({ title, text, image }: Props) {
  const random: number = Math.random();
  const randomtext: string = `Ranglist ${Math.floor(random * 10) + 1}`;
  const randomWord: string = getRandomWord();

  return (
    <div className="card">
      <h2>{title}</h2>
      <img src={image + "?id=" + random} alt={title} />
      <p>{randomWord}</p>
      <p>{random}</p>
      <p>{randomtext}</p>
    </div>
  );
}