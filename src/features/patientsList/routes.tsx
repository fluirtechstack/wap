import { type RouteObject } from "react-router-dom";
import PatientsList from "./pages/patientsList";

const patientsListRoutes: RouteObject[] = [
  {
    children: [
      {
        path: "/pacientes",
        element: <PatientsList />,
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
