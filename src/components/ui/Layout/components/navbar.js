import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Bars3Icon } from "@heroicons/react/24/solid";
import { useAppSelector, useAppDispatch } from "@store/hooks/useRedux";
import { changeDisplay } from "../navigationSlice";
export default function NavBar() {
    const { display } = useAppSelector((state) => state.navigation);
    const dispatch = useAppDispatch();
    const handleChangeDisplay = () => {
        dispatch(changeDisplay());
        console.log("Display: ", display);
    };
    return (_jsxs("nav", { className: "flex bg-slate-900 p-4 text-white font-bold ", children: [_jsx(Bars3Icon, { className: "size-6 cursor-pointer", onClick: handleChangeDisplay }), "F. display: ", display ? "true" : "false"] }));
}
