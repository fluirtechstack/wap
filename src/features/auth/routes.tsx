// src/features/profissionais/routes.tsx
import { type RouteObject } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
 

const loginRoutes: RouteObject[] = [
  {
    path: '/login',
    element: <LoginPage />,
  },

]

export default loginRoutes
