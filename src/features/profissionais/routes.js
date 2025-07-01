import { jsx as _jsx } from "react/jsx-runtime";
import ProfissionalListPage from "./pages/ProfissionalListPage";
import ProfissionalFormPage from "./pages/ProfissionalFormPage";
const profissionaisRoutes = [
    {
        path: "profissionais",
        element: _jsx(ProfissionalListPage, {}),
    },
    {
        path: "/profissionais/novo",
        element: _jsx(ProfissionalFormPage, {}),
    },
    {
        path: "/profissionais/:id/editar",
        element: _jsx(ProfissionalFormPage, {}),
    },
];
export default profissionaisRoutes;
