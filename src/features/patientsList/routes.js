import { jsx as _jsx } from "react/jsx-runtime";
import PatientsList from "./pages/patientsList";
const patientsListRoutes = [
    {
        children: [
            {
                path: "/pacientes",
                element: _jsx(PatientsList, {}),
            },
        ],
    },
    // {
    //   path: "/profissionais/novo",
    //   element: <ProfissionalFormPage />,
    // },
    // {
    //   path: "/profissionais/:id/editar",
    //   element: <ProfissionalFormPage />,
    // },
];
export default patientsListRoutes;
