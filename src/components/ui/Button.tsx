import { type ComponentType, type SVGProps } from "react";
import { ArrowPathIcon } from "@heroicons/react/24/solid";
interface ButtonProps {
  onClick: () => void;
  disabled?: boolean;
  loading?: boolean;
  icon?: ComponentType<SVGProps<SVGSVGElement>>;
  text: string;
}

const Button = ({
  onClick,
  disabled,
  loading,
  icon: Icon,
  text,
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled || loading}
      className={`w-full h-full cursor-pointer pointer-events-auto flex items-center justify-center px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-2 focus:outline-offset-2 focus:outline-blue-600 active:bg-blue-600  transition duration-300 ease-in-out ${
        disabled ? "opacity-50 cursor-not-allowed" : ""
      }`}
    >
      {loading ? (
        <ArrowPathIcon className="size-6 animate-spin" />
      ) : (
        <>
          {Icon && <Icon className="mr-2" />}
          {text}
        </>
      )}
    </button>
  );
};

export default Button;
