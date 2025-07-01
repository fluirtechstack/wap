import { jsx as _jsx } from "react/jsx-runtime";
import { configureStore } from "@reduxjs/toolkit";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import Snackbar from "../Snackbar";
import snackbarReducer from "../SnackbarSlice";
describe("Snackbar", () => {
    const renderWithStore = (preloadedState) => {
        const store = configureStore({
            reducer: {
                snackbar: snackbarReducer,
            },
            preloadedState,
        });
        return render(_jsx(Provider, { store: store, children: _jsx(Snackbar, {}) }));
    };
    it("deve renderizar o snackbar quando isVisible for true", () => {
        renderWithStore({
            snackbar: {
                isVisible: true,
                text: "Mensagem de teste",
                color: "bg-green-500",
                classes: "text-white",
            },
        });
        expect(screen.getByText("Mensagem de teste")).toBeInTheDocument();
    });
    it("não deve renderizar o snackbar quando isVisible for false", () => {
        renderWithStore({
            snackbar: {
                isVisible: false,
                text: "Mensagem invisível",
                color: "bg-red-500",
                classes: "text-white",
            },
        });
        expect(screen.queryByText("Mensagem invisível")).not.toBeInTheDocument();
    });
});
