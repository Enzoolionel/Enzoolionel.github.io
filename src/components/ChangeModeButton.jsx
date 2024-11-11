import { useEffect } from "react";
import { useState } from "react";

const ChangeModeButton = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem("darkMode") === "true";
  });

  // Actualizar el modo en el localStorage y el DOM cada vez que isDarkMode cambie
  useEffect(() => {
    localStorage.setItem("darkMode", isDarkMode);
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  // Cambiar el modo oscuro
  const changeMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <button
      onClick={changeMode}
      className="group ml-1 duration-75 hover:translate-x-1 hover:bg-slate-500 transition-all h-6 w-6 bg-slate-800 dark:bg-slate-400 -rotate-45 
      dark:hover:bg-slate-200 rounded-full flex items-center justify-center dark:justify-end"
    >
      <span
        className="bg-slate-300 rounded-full w-5 h-5 dark:w-4 dark:h-4 flex
      dark:rounded-l-full dark:bg-slate-800 dark:block dark:left-1 dark:relative"
      />
      <span className="dark:hidden h-5 w-[3px] rounded-lg top-2 -z-10 absolute group-hover:bg-slate-500 bg-slate-800" />
      <span className="dark:hidden h-5 w-[3px] rounded-lg bottom-2 -z-10 absolute group-hover:bg-slate-500 bg-slate-800" />
      <span className="dark:hidden h-5 w-[3px] rounded-lg rotate-90 left-4 -z-10 absolute group-hover:bg-slate-500 bg-slate-800" />
      <span className="dark:hidden h-5 w-[3px] rounded-lg rotate-90 right-4 -z-10 absolute group-hover:bg-slate-500 bg-slate-800" />
      <span className="dark:hidden h-4 w-[3px] rounded-lg rotate-45 right-1 bottom-[10px] -z-10 absolute group-hover:bg-slate-500 bg-slate-800" />
      <span className="dark:hidden h-4 w-[3px] rounded-lg rotate-45 left-1 top-[10px] -z-10 absolute group-hover:bg-slate-500 bg-slate-800" />
      <span className="dark:hidden h-4 w-[3px] rounded-lg -rotate-45 right-4 bottom-[10px] -z-10 absolute group-hover:bg-slate-500 bg-slate-800" />
      <span className="dark:hidden h-4 w-[3px] rounded-lg -rotate-45 left-4 top-[10px] -z-10 absolute group-hover:bg-slate-500 bg-slate-800" />
    </button>
  );
};

export default ChangeModeButton;
