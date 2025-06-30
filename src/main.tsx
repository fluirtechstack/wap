// src/main.tsx
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "@store/index";
import AppRoutes from "@router/router";
import Snackbar from "@components/ui/Snackbar/Snackbar";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <AppRoutes /> {/* Aqui está o useRoutes() */}
        <Snackbar />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
