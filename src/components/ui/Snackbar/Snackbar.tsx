import styles from "./style.module.css";
import { useAppSelector } from "@store/hooks/useRedux";
import { useAppDispatch } from "@store/hooks/useRedux";
import { hideSnackbar } from "@store/index";
import { useEffect } from "react";

const Snackbar = () => {
  const dispatch = useAppDispatch();
  const { isVisible, text, color, classes, duration } = useAppSelector(
    (state) => state.snackbar
  );

  useEffect(() => {
    if (isVisible) {
      const timeout = setTimeout(() => {
        dispatch(hideSnackbar());
      }, duration); // ou 1000 como você tinha
      return () => clearTimeout(timeout);
    }
  }, [isVisible, dispatch]);

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
