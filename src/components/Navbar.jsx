import { useState } from "react";
import { PiDogFill } from "react-icons/pi";
import { FiSun, FiMoon } from "react-icons/fi";
import { Link } from "react-router-dom";
import menus from "../data/menus";

export default function Navbar(props) {
  const [isOpen, setIsOpen] = useState(false);
  const { toggleTheme, toggle } = props;
  return (
    <nav className={`px-5 py-1 sticky top-0 z-50 ` + toggleTheme}>
      <div className="container mx-auto my-5 flex justify-between items-center">
        <Link
          to="/"
          className="flex items-center text-white text-2xl font-semibold"
        >
          <PiDogFill />
          <p className="ml-2">Navin Chamgun</p>
        </Link>
        <div className="icon flex justify-center items-center">
          <div className=" mr-7">
            {toggleTheme === "dark" ? (
              <FiMoon
                className={
                  `h-[50px] w-[50px] p-3 text-white cursor-pointer rounded-md border-white
             ` +
                  `${
                    toggleTheme === "dark"
                      ? "bg-[#234070] hover:bg-[#4e71a8] "
                      : "bg-orange-400 hover:bg-orange-300"
                  }`
                }
                onClick={() => toggle(toggleTheme)}
              />
            ) : (
              <FiSun
                className={
                  `h-[50px] w-[50px] p-3 text-white cursor-pointer rounded-md border-white
            ` +
                  `${
                    toggleTheme === "dark"
                      ? "bg-[#234070] hover:bg-[#4e71a8] "
                      : "bg-orange-400 hover:bg-orange-300"
                  }`
                }
                onClick={() => toggle(toggleTheme)}
              />
            )}
          </div>
          <div className="md:hidden">
            <svg
              className="h-[50px] w-[50px] p-2 fill-current text-white cursor-pointer border-solid border-2 rounded-md border-gray-700"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              onClick={() => setIsOpen(!isOpen)}
              onMouseOver={() => setIsOpen(true)}
              onMouseOut={() => setIsOpen(false)}
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm16 5H4v2h16v-2z"
              />
            </svg>
          </div>
          <div className="hidden md:flex md:items-center md:w-auto">
            <div className="text-lg">
              {menus.map((item) => {
                return (
                  <Link
                    key={item.id}
                    to={item.path}
                    className="font-bold mr-4 bg-clip-text hover:text-transparent hover:bg-gradient-to-r hover:from-purple-500 hover:to-orange-500"
                  >
                    {item.name}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>

        <div
          className={`${
            isOpen
              ? "md:hidden absolute right-5 top-[73px]"
              : "hidden opacity-0"
          } `}
          onMouseOver={() => setIsOpen(true)}
          onMouseOut={() => setIsOpen(false)}
        >
          <div className="text-md bg-slate-200 px-3 py-1 flex flex-col rounded-md w-[250px]">
            {menus.map((item) => {
              return (
                <Link
                  key={item.id}
                  to={item.path}
                  className="my-3 text-slate-600 hover:underline"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}
