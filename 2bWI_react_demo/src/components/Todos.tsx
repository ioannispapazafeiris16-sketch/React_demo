import { useEffect, useState } from "react";
import Todo from "./Todo";
import styles from "./Todos.module.css";

type TodoType = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export default function Todos() {
  const [todos, setTodos] = useState<TodoType[]>([]);

  // läuft nur einmal beim ersten Anzeigen (im Dev-Modus zweimal)
  useEffect(() => {
    fetch("/judo.json")
      .then((response) => response.json())
      .then((json) => setTodos(json));
  }, []);

  return (
    <div className={styles.container}>
      {todos.map((todo) => (
        <Todo key={todo.id} title={todo.title} description={todo.body} />
      ))}
    </div>
  );
}
