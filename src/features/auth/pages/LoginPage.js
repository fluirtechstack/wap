import { jsx as _jsx } from "react/jsx-runtime";
import styles from "../styles/style.module.css";
import LoginForm from "../components/LoginForm";
export default function Example() {
    return (_jsx("div", { className: `${styles.bgImage} h-full`, children: _jsx(LoginForm, {}) }));
}
