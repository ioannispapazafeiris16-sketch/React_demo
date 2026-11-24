import styles from "./Todo.module.css";

type Props = {
  title: string;
  description: string;
};

export default function Todo({ title, description }: Props) {
  return (
    <div className={styles.card}>
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
}
