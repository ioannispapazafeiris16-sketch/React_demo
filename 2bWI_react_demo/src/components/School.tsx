import { useEffect, useState } from "react";

type Props = {
  name: string;
  subjects: string[];
};

export default function School({ name, subjects }: Props) {
  const [likes, setLikes] = useState<number>(0);

  useEffect(() => {
    if (likes % 5 === 0) {
      alert("Bravo");
    }
  }, [likes]);

  return (
    <div className="card">
      <h2>{name}</h2>
      <ul>
        {subjects.map((subject) => (
          <li key={subject}>{subject}</li>
        ))}
      </ul>
      <button
        onClick={() => {
          setLikes(likes + 1);
          console.log(likes + 1);
        }}
      >
        Like
      </button>
      <p>Likes: {likes}</p>
    </div>
  );
}
