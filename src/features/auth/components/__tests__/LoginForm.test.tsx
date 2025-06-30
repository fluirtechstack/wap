import { configureStore } from "@reduxjs/toolkit";
import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import LoginForm from "../LoginForm";
import snackbarReducer from "../../../../components/ui/Snackbar/SnackbarSlice";

describe("LoginForm", () => {
  const renderWithStore = (preloadedState?: {
    snackbar: {
      isVisible: boolean;
      text: string;
      color: string;
      classes: string;
    };
  }) => {
    const store = configureStore({
      reducer: {
        snackbar: snackbarReducer,
      },
      preloadedState,
    });

    return render(
      <Provider store={store}>
        <LoginForm />
      </Provider>
    );
  };

  it("deve renderizar inputs e botão", () => {
    renderWithStore({
      snackbar: {
        isVisible: false,
        text: "Mensagem oculta",
        color: "bg-red-500",
        classes: "text-white",
      },
    });
    expect(screen.getByLabelText(/e-mail/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/senha/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /enviar/i })).toBeInTheDocument();
  });

  it("deve permitir digitar email e senha", () => {
    renderWithStore({
      snackbar: {
        isVisible: false,
        text: "Mensagem oculta",
        color: "bg-red-500",
        classes: "text-white",
      },
    });

    const emailInput = screen.getByLabelText(/e-mail/i) as HTMLInputElement;
    const passwordInput = screen.getByLabelText(/senha/i) as HTMLInputElement;

    fireEvent.change(emailInput, { target: { value: "teste@teste.com" } });
    fireEvent.change(passwordInput, { target: { value: "123456" } });

    expect(emailInput.value).toBe("teste@teste.com");
    expect(passwordInput.value).toBe("123456");
  });

  it("deve chamar handleLogin ao clicar no botão", () => {
    renderWithStore({
      snackbar: {
        isVisible: false,
        text: "Mensagem oculta",
        color: "bg-red-500",
        classes: "text-white",
      },
    });

    fireEvent.change(screen.getByLabelText(/e-mail/i), {
      target: { value: "user@example.com" },
    });
    fireEvent.change(screen.getByLabelText(/senha/i), {
      target: { value: "senha123" },
    });
    fireEvent.click(screen.getByRole("button", { name: /enviar/i }));
  });
});
