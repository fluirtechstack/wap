import { useAppSelector } from "@store/hooks/useRedux";
import { type ComponentType, type SVGProps } from "react";
import { HomeIcon } from "@heroicons/react/24/solid";
import styles from "./style.module.css";
import minhaImagem from "@assets/WIN_20250108_08_40_07_Pro.jpg";

export default function MainLayout() {
  const { display } = useAppSelector((state) => state.navigation);

  type MenuItem = {
    title: string;
    url: string;
    icon: ComponentType<SVGProps<SVGSVGElement>>;
  };

  const menuItens: MenuItem[] = [
    {
      title: "Home",
      url: "/home",
      icon: HomeIcon,
    },
    {
      title: "Home",
      url: "/home",
      icon: HomeIcon,
    },
  ];

  return (
    <>
      <div
        className={`fixed w-10 h-full bg-slate-900 transform duration-300 ease-in-out ${styles["sidebar"]}`}
      >
        {/* <div
        className={`w-2xs h-full bg-slate-900 fixed transform  duration-300 ease-in-out ${
          display ? "left-0" : "-left-full"
        }`}
      > */}
        <div className="flex align-center p-3 border-b-1 border-slate-800">
          <img
            className="w-8 h-8 rounded-full object-cover"
            src={minhaImagem}
            alt="..."
          />
          <p className="flex justify-center flex-col overflow-hidden text-white text-nowrap flex-1 pl-4 ">
            Vincius castelani
          </p>
        </div>
        {menuItens.map((item) => (
          <div
            key={item.url}
            className="flex flex-1 align-center  p-4 hover:bg-slate-700 cursor-pointer transition ease-in-out duration-300"
          >
            <p>
              {item.icon && <item.icon className="w-6 h-6 text-white mr-2" />}
            </p>
            <p className="overflow-hidden text-white m-0">{item.title}</p>
          </div>
        ))}
      </div>
    </>
  );
}
