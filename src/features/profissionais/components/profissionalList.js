import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// import { useSelector, useDispatch } from "react-redux";
import { useAppSelector, useAppDispatch } from "@store/hooks/useRedux";
import { removeProfessional } from "../profissionalSlice";
import { Link } from "react-router-dom";
export default function ProfessionalList() {
    const profissionais = useAppSelector((state) => state.profissionais.list);
    const dispatch = useAppDispatch();
    return (_jsxs("div", { className: "border-1 border-solid border-slate-400 rounded-lg grid grid-cols-1 gap-4 p-6 max-w-2xl mx-auto", children: [_jsx("h1", { className: "text-2xl font-bold", children: "Profissionais" }), _jsx(Link, { to: "/profissionais/novo", className: "px-4 py-2 bg-blue-600 text-white rounded", children: "Novo profissional" }), _jsx("ul", { className: "divide-y divide-gray-200", children: profissionais.map((p) => (_jsxs("li", { className: "flex justify-between items-center py-2", children: [_jsxs("div", { children: [_jsx("p", { className: "font-medium", children: p.name }), _jsx("p", { className: "text-sm text-gray-500", children: p.email })] }), _jsxs("div", { className: "space-x-2", children: [_jsx(Link, { to: `/profissionais/${p.id}/edit`, className: "text-blue-600 hover:underline", children: "Editar" }), _jsx("button", { className: "text-red-600 hover:underline", onClick: () => dispatch(removeProfessional(p.id)), children: "Remover" })] })] }, p.id))) })] }));
}
