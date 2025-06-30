import { useRoutes } from "react-router-dom";
import loginRoutes from "../../features/auth/routes";
import profissionaisRoutes from "../../features/profissionais/routes";
// import outras rotas de features...

const routes = [...loginRoutes, ...profissionaisRoutes];

export default function AppRoutes() {
  return useRoutes(routes);
}
