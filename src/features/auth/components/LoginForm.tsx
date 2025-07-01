import { useState } from "react";
import { useNavigate } from "react-router-dom";
import TextInput from "@/components/ui/TextInput";
import Button from "@/components/ui/Button";
import { UserIcon, LockClosedIcon } from "@heroicons/react/24/solid";
import { type loginForm } from "../types";
import { loginSuccess, showSnackbar, type SnackbarState } from "@store/index";
import { useAppDispatch } from "@store/hooks/useRedux";

export default function LoginForm() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  function handleLogin(loginForm: loginForm) {
    const { email, password } = loginForm;
    setLoading(true);

    //Simula uma requisição de login
    setTimeout(() => {
      setLoading(false);
      const snackbar: SnackbarState = {
        text: `Login realizado com sucesso! ${email} ${password}`,
        color: "bg-lime-600",
        classes: "text-white shadow-lg transition-all duration-300 ease-in-out",
        isVisible: true,
        duration: 5000,
      };
      const session = {
        token: "token String",
        user: "user String",
        isAuthenticated: true,
      };

      dispatch(showSnackbar(snackbar));
      dispatch(loginSuccess(session));
      navigate("/pacientes");
    }, 3000);
  }

  return (
    <section className="">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto ">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-800">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Entre para continuar
            </h1>
            <TextInput
              name="email"
              value={email}
              type="text"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="name@email.com"
              icon={UserIcon}
              label="E-mail"
              labelFor="email"
            />
            <TextInput
              name="password"
              value={password}
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="******"
              icon={LockClosedIcon}
              label="Senha"
              labelFor="password"
            />
            <Button
              text="Enviar"
              onClick={() => handleLogin({ email, password })}
              loading={loading}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
