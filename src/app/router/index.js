import { jsx as _jsx } from "react/jsx-runtime";
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
        element: (_jsx(PrivateRouteGuard, { children: _jsx(MainLayout, {}) })),
        children: [...privateRoutes, ...profissionaisRoutes, ...patientsRoutes],
    },
    { path: "*", element: _jsx(Navigate, { to: "/", replace: true }) },
];
export default function AppRoutes() {
    return useRoutes(routes);
}
