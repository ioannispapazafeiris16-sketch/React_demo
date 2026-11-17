import styles from "./Pictures.module.css";
import Card from "./Card";
import judokas from "../data/judokas.json";

export default function Pictures() {
  return (
    <div className={styles.cardContainer}>
      {judokas.map((judoka) => (
        <Card
          key={judoka.title}
          title={judoka.title}
          text={judoka.text}
          image={judoka.image}
        />
      ))}
      <Card image="https://picsum.photos/200/300" title="Test" text="Test" />
      <Card image="https://picsum.photos/200/300" title="Test" text="Test" />
      <Card image="https://picsum.photos/200/300" title="Test" text="Test" />
    </div>
  );
}
