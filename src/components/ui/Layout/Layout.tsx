import { Outlet } from "react-router-dom";
// import NavBar from "./components/navbar";
import Sidebar from "./components/sidebar";
export default function MainLayout() {
  return (
    <>
      {/* <NavBar /> */}
      <Sidebar />
      <main className="pl-14 ml-auto w-full">
        <Outlet />
      </main>
    </>
  );
}
