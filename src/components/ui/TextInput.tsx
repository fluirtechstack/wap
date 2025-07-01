import React, { type ComponentType, type SVGProps } from "react";

interface TextInputProps {
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type?: string;
  label?: string;
  labelFor?: string;
  icon?: ComponentType<SVGProps<SVGSVGElement>>;
}

const TextInput: React.FC<TextInputProps> = ({
  value,
  onChange,
  placeholder = "",
  label = "",
  labelFor = "",
  type = "text",
  icon: Icon,
}) => {
  return (
    <div className="relative flex items-center text-gray-400 focus-within:text-white">
      {Icon && (
        <Icon className="size-5 absolute mt-7 ml-3 pointer-events-none transition duration-300 ease-in-out" />
      )}
      <div className="w-full">
        <label
          htmlFor={labelFor}
          className="block mb-2 text-sm font-medium text-gray-300 dark:text-white"
        >
          {label + ":"}
        </label>
        <input
          id={labelFor}
          name={labelFor}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="w-full pr-3 pl-10 py-2 font-semibold placeholder-gray-300  text-white rounded-md border-none ring-1 dark:ring-gray-500 focus:ring-blue-500 focus:ring-2 hover:ring-blue-500 hover:ring-1 transition duration-300 ease-in-out outline-none dark:bg-gray-500 inset-shadow-xl "
        />
      </div>
    </div>
  );
};

export default TextInput;
