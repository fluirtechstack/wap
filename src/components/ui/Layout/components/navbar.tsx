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

  return (
    <nav className="flex bg-slate-900 p-4 text-white font-bold ">
      <Bars3Icon
        className="size-6 cursor-pointer"
        onClick={handleChangeDisplay}
        // onMouseEnter={handleChangeDisplay}
        // onMouseLeave={handleChangeDisplay}
      />
      F. display: {display ? "true" : "false"}
    </nav>
  );
}
