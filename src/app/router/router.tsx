import { useRoutes, Navigate } from "react-router-dom";
import loginRoutes from "@features/auth/routes";
import profissionaisRoutes from "@features/profissionais/routes";
import patientsRoutes from "@features/patientsList/routes";
import privateRoutes from "@features/privateRoute/routes";
import PrivateRoute from "@features/privateRoute/pages/PrivateRoute";
import MainLayout from "@/components/ui/Layout/Layout";

const routes = [
  ...loginRoutes,
  {
    path: "/",
    element: (
      <PrivateRoute>
        <MainLayout />
      </PrivateRoute>
    ),
    children: [...privateRoutes, ...profissionaisRoutes, ...patientsRoutes],
  },
  { path: "*", element: <Navigate to="/" replace /> },
];

export default function AppRoutes() {
  return useRoutes(routes);
}
