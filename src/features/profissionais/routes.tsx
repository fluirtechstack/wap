// src/features/profissionais/routes.tsx
import { type RouteObject } from "react-router-dom";
import ProfissionalListPage from "./pages/ProfissionalListPage";
import ProfissionalFormPage from "./pages/ProfissionalFormPage";
const profissionaisRoutes: RouteObject[] = [
  {
    path: "profissionais",
    element: <ProfissionalListPage />,
  },
  {
    path: "/profissionais/novo",
    element: <ProfissionalFormPage />,
  },
  {
    path: "/profissionais/:id/editar",
    element: <ProfissionalFormPage />,
  },
];

export default profissionaisRoutes;
