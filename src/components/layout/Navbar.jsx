import React from "react";
import { Bars3Icon , PlusIcon } from "@heroicons/react/24/outline";
import classNames from "classnames";

const Navbar = (props) => {
  return (
    <div>
    <nav
      className={ classNames({
        "bg-white text-zinc-500": true, 
        "flex items-center": true, 
        "w-screen md:w-full sticky z-10 px-4 shadow-sm h-[73px] top-0 ": true,
         
      })}
    >
      <div className="font-bold text-lg">Purposr</div>
      <div className="flex-grow"></div>
      <button className="md:hidden" onClick={props.onMenuButtonClick}>
        <Bars3Icon className="h-6 w-6" />
      </button>
    </nav>
    <div className="flex items-center bg-black text-white p-4 rounded-lg my-2 mx-4 absolute bottom-0 right-0">
    <PlusIcon className="h-6 w-6" />
  </div>
  </div>
  );
};

export default Navbar;
