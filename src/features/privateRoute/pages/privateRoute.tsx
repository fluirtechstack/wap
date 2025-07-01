import { Navigate } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "@store/hooks/useRedux";
import { type RootState, showSnackbar, type SnackbarState } from "@store/index";
import { useEffect, type ReactNode } from "react";

interface PrivateRouteProps {
  children: ReactNode;
}

export default function PrivateRoute({ children }: PrivateRouteProps) {
  const dispatch = useAppDispatch();
  const { isAuthenticated } = useAppSelector((state: RootState) => state.auth);

  useEffect(() => {
    if (!isAuthenticated) {
      const snackbar: SnackbarState = {
        text: `É preciso estar logado para acessar este recurso.`,
        color: "bg-yellow-600",
        classes: "text-white shadow-lg transition-all duration-300 ease-in-out",
        isVisible: true,
        duration: 5000,
      };
      dispatch(showSnackbar(snackbar));
    }
  }, [isAuthenticated, dispatch]);

  return isAuthenticated ? <>{children}</> : <Navigate to="/login" replace />;
}
