import { Fragment as _Fragment, jsx as _jsx } from "react/jsx-runtime";
import { Navigate } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "@store/hooks/useRedux";
import { showSnackbar } from "@store/index";
import { useEffect } from "react";
export default function PrivateRoute({ children }) {
    const dispatch = useAppDispatch();
    const { isAuthenticated } = useAppSelector((state) => state.auth);
    useEffect(() => {
        if (!isAuthenticated) {
            const snackbar = {
                text: `É preciso estar logado para acessar este recurso.`,
                color: "bg-yellow-600",
                classes: "text-white shadow-lg transition-all duration-300 ease-in-out",
                isVisible: true,
                duration: 5000,
            };
            dispatch(showSnackbar(snackbar));
        }
    }, [isAuthenticated, dispatch]);
    return isAuthenticated ? _jsx(_Fragment, { children: children }) : _jsx(Navigate, { to: "/login", replace: true });
}
