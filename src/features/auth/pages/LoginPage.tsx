import styles from "../styles/style.module.css";
import LoginForm from "../components/LoginForm";

export default function Example() {
  return (
    <div className={`${styles.bgImage} h-full`}>
      <LoginForm />
    </div>
  );
}
