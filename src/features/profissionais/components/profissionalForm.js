import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
import { useAppSelector, useAppDispatch } from "@store/hooks/useRedux";
import { addProfessional, updateProfessional, } from "../profissionalSlice";
import { useNavigate, useParams } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
export default function ProfessionalForm() {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const { id } = useParams();
    const existing = useAppSelector((state) => state.profissionais.list.find((p) => p.id === id));
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    useEffect(() => {
        if (existing) {
            setName(existing.name);
            setEmail(existing.email);
        }
    }, [existing]);
    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            id: id !== null && id !== void 0 ? id : uuidv4(),
            name,
            email,
        };
        if (id && existing) {
            dispatch(updateProfessional(data));
        }
        else {
            dispatch(addProfessional(data));
        }
        navigate("/profissionais");
    };
    return (_jsxs("form", { onSubmit: handleSubmit, className: "space-y-4 max-w-md ", children: [_jsx("h1", { className: "text-2xl font-bold", children: id ? "Editar profissional" : "Novo profissional" }), _jsx("input", { type: "text", placeholder: "Nome", className: "w-full border p-2 rounded", value: name, onChange: (e) => setName(e.target.value), required: true }), _jsx("input", { type: "email", placeholder: "Email", className: "w-full border p-2 rounded", value: email, onChange: (e) => setEmail(e.target.value), required: true }), _jsx("button", { type: "submit", className: "bg-green-600 text-white px-4 py-2 rounded", children: "Salvar" })] }));
}
