import { Bars3Icon } from "@heroicons/react/24/solid";
import { useAppDispatch } from "@store/hooks/useRedux";
import { changeDisplay } from "../navigationSlice";
export default function NavBar() {
  const dispatch = useAppDispatch();

  const handleChangeDisplay = () => {
    dispatch(changeDisplay());
  };

  return (
    <nav className="flex bg-slate-900 p-4 text-white font-bold ">
      <Bars3Icon
        className="size-6 cursor-pointer"
        onClick={handleChangeDisplay}
        // onMouseEnter={handleChangeDisplay}
        // onMouseLeave={handleChangeDisplay}
      />
      Fluir.
    </nav>
  );
}
