import { useRoutes, Navigate } from "react-router-dom";
import loginRoutes from "@features/auth/routes";
import profissionaisRoutes from "@features/profissionais/routes";
import patientsRoutes from "@features/patientsList/routes";
import privateRoutes from "@features/privateRoute/routes";
import PrivateRouteGuard from "@features/privateRoute/pages/privateRoute";
import MainLayout from "@/components/ui/Layout/Layout";

const routes = [
  ...loginRoutes,
  {
    path: "/",
    element: (
      <PrivateRouteGuard>
        <MainLayout />
      </PrivateRouteGuard>
    ),
    children: [...privateRoutes, ...profissionaisRoutes, ...patientsRoutes],
  },
  { path: "*", element: <Navigate to="/" replace /> },
];

export default function AppRoutes() {
  return useRoutes(routes);
}
