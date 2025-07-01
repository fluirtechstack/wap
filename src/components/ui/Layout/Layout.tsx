import { Outlet } from "react-router-dom";
import NavBar from "./components/navbar";
import { useAppSelector, useAppDispatch } from "@store/hooks/useRedux";
export default function MainLayout() {
  const { display } = useAppSelector((state) => state.navigation);

  type MenuItem = {
    title: string;
    url: string;
  };

  const menuItens: MenuItem[] = [
    {
      title: "Home",
      url: "/home",
    },
  ];

  return (
    <>
      <NavBar />
      {/* //sidebar */}

      <div
        className={`w-2xs h-full bg-slate-900 fixed transform  duration-300 ease-in-out ${
          display ? "left-0" : "-left-full"
        }`}
      >
        {menuItens.map((item) => (
          <div key={item.url} className="border-y-4 border-slate-800">
            <p className="p-4 text-white">{item.title}</p>
          </div>
        ))}
      </div>
      <main className="flex flex-1 p-2 ">
        <Outlet />
      </main>
    </>
  );
}
