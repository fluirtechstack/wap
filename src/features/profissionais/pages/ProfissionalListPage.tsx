// src/features/profissionais/pages/ProfissionalListPage.tsx
import ProfissionalList from '../components/profissionalList'

export default function ProfissionalListPage() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Profissionais</h1>
      <ProfissionalList />
    </div>
  )
}
