import { jsx as _jsx } from "react/jsx-runtime";
import ProfessionalListPage from "@features/profissionais/pages/ProfissionalListPage";
const privateRoutes = [
    {
        children: [
            {
                path: "/dashboard",
                element: _jsx(ProfessionalListPage, {}), // exemplo, pode ser outra tela
            },
            // você pode adicionar outras rotas privadas aqui também
        ],
    },
];
export default privateRoutes;
