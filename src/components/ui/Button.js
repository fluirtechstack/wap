import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { ArrowPathIcon } from "@heroicons/react/24/solid";
const Button = ({ onClick, disabled, loading, icon: Icon, text, }) => {
    return (_jsx("button", { onClick: onClick, disabled: disabled || loading, className: `w-full h-full cursor-pointer pointer-events-auto flex items-center justify-center px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-2 focus:outline-offset-2 focus:outline-blue-600 active:bg-blue-600  transition duration-300 ease-in-out ${disabled ? "opacity-50 cursor-not-allowed" : ""}`, children: loading ? (_jsx(ArrowPathIcon, { className: "size-6 animate-spin" })) : (_jsxs(_Fragment, { children: [Icon && _jsx(Icon, { className: "mr-2" }), text] })) }));
};
export default Button;
