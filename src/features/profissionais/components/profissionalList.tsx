// import { useSelector, useDispatch } from "react-redux";
import { useAppSelector, useAppDispatch } from "@store/hooks/useRedux";
import { type RootState } from "@store/index";
import { removeProfessional } from "../profissionalSlice";
import { Link } from "react-router-dom";

export default function ProfessionalList() {
  const profissionais = useAppSelector(
    (state: RootState) => state.profissionais.list
  );
  const dispatch = useAppDispatch();

  return (
    <div className="border-1 border-solid border-slate-400 rounded-lg grid grid-cols-1 gap-4 p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold">Profissionais</h1>

      <Link
        to="/profissionais/novo"
        className="px-4 py-2 bg-blue-600 text-white rounded"
      >
        Novo profissional
      </Link>

      <ul className="divide-y divide-gray-200">
        {profissionais.map((p) => (
          <li key={p.id} className="flex justify-between items-center py-2">
            <div>
              <p className="font-medium">{p.name}</p>
              <p className="text-sm text-gray-500">{p.email}</p>
            </div>
            <div className="space-x-2">
              <Link
                to={`/profissionais/${p.id}/edit`}
                className="text-blue-600 hover:underline"
              >
                Editar
              </Link>
              <button
                className="text-red-600 hover:underline"
                onClick={() => dispatch(removeProfessional(p.id))}
              >
                Remover
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
