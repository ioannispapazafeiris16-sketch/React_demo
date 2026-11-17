import styles from "./Content.module.css";
import Menu from "./Menu";
import Pictures from "./Pictures";

export default function Content() {
  return (
    <div className={styles.container}>
      <Menu />
      <Pictures />
    </div>
  );
}
