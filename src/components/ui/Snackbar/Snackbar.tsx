import { useSelector } from "react-redux";
import type { RootState } from "../../../app/store";
import styles from "./style.module.css";
const Snackbar = () => {
  const { isVisible, text, color, classes } = useSelector(
    (state: RootState) => state.snackbar
  );
  return (
    <div
      className={`fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 rounded-md ${color} ${
        isVisible ? styles.snackbarFadeIn : styles.snackbarFadeOut
      } ${classes}`}
    >
      <p className={`p-4`}>{text}</p>
    </div>
  );
};

export default Snackbar;
