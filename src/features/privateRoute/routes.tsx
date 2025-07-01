import ProfessionalListPage from "@features/profissionais/pages/ProfissionalListPage";

const privateRoutes = [
  {
    children: [
      {
        path: "/dashboard",
        element: <ProfessionalListPage />, // exemplo, pode ser outra tela
      },
      // você pode adicionar outras rotas privadas aqui também
    ],
  },
];

export default privateRoutes;
