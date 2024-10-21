import { Link } from "react-router-dom";

import { Pages } from "../data/data.jsx";
import { motion } from "framer-motion";

const NavBar = () => {
  console.log(location.pathname);
  return (
    <nav className="w-screen  absolute flex justify-center bottom-20">
      <ul
        className={` bg-slate-600 flex py-6 px-24 gap-10 rounded-2xl opacity-60`}
      >
        {Pages.map((page) => (
          <motion.li
            className={`${
              location.pathname === page.route ? "bg-slate-500" : ""
            } text-white rounded-full p-1 `}
            key={page.id}
            whileTap={{ scale: 0.8 }}
          >
            <Link to={`${page.route}`}>
              {/* Usa Link cuando lo descomentes */}
              {/* <Link to={page.path}>{page.name}</Link> */}
              {/* Para pruebas, puedes usar un simple enlace si React Router no está configurado aún */}
              <picture>{page.icon}</picture>
            </Link>
          </motion.li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
