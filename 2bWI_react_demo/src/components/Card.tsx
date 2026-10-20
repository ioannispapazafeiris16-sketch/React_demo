type Props = {
  title: string;
  text: string;
  image: string;
};

export default function Card({ title, text, image }: Props) {
  const random: number = Math.random();
  const randomtext: string = `Ranglist ${Math.floor(random * 10) + 1}`;

  return (
    <div className="card">
      <h2>{title}</h2>
      <img src={image + "?id=" + random} alt={title} />
      <p>{text}</p>
      <p>{random}</p>
      <p>{randomtext}</p>
    </div>
  );
}
