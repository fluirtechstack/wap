import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { Outlet } from "react-router-dom";
import NavBar from "./components/navbar";
import { useAppSelector } from "@store/hooks/useRedux";
export default function MainLayout() {
    const { display } = useAppSelector((state) => state.navigation);
    const menuItens = [
        {
            title: "Home",
            url: "/home",
        },
    ];
    return (_jsxs(_Fragment, { children: [_jsx(NavBar, {}), _jsx("div", { className: `w-2xs h-full bg-slate-900 fixed transform  duration-300 ease-in-out ${display ? "left-0" : "-left-full"}`, children: menuItens.map((item) => (_jsx("div", { className: "border-y-4 border-slate-800", children: _jsx("p", { className: "p-4 text-white", children: item.title }) }, item.url))) }), _jsx("main", { className: "flex flex-1 p-2 ", children: _jsx(Outlet, {}) })] }));
}
