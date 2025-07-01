import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// src/main.tsx
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "@store/index";
import AppRoutes from "@router/index";
import Snackbar from "@components/ui/Snackbar/Snackbar";
import "./index.css";
ReactDOM.createRoot(document.getElementById("root")).render(_jsx(React.StrictMode, { children: _jsx(Provider, { store: store, children: _jsxs(BrowserRouter, { children: [_jsx(AppRoutes, {}), " ", _jsx(Snackbar, {})] }) }) }));
