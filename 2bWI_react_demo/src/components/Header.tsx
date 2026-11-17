import styles from "./Header.module.css";
import logo from "../assets/react.svg";

export default function Header() {
  return (
    <div className={styles.container}>
      <h1>Judoka</h1>
      <img src={logo} alt="Logo" />
    </div>
  );
}
