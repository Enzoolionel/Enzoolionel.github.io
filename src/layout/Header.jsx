import Perfil from "../../public/Perfil.jpg";
import Icon from "../components/Icon.jsx";
import { dataNetwork } from "../data/data.js";

const Header = () => {
  console.log(dataNetwork);

  return (
    <header className="p-6 h-[450px] w-screen dark:bg-slate-800 grid place-items-center grid-rows-2 grid-cols-[100px,1fr]">
      <img
        src={Perfil}
        alt="Avatar del usuario"
        className="h-48 w-48 rounded-full border-2 border-slate-400 bg-slate-400 mb-2"
      />
      <article className="h-36 w-full">
        <h1 className="text-3xl font-semibold text-slate-300">Enzo Peralta</h1>
        <h2 className="font-semibold text-slate-300">Web Developer</h2>
      </article>
      <ul className="row-start-1 row-end-3 col-start-1 h-full w-full flex flex-col gap-5 justify-center">
        {dataNetwork.map((e) => (
          <li key={e.title}>
            <Icon path={e.path} className="text-slate-300" />
          </li>
        ))}
      </ul>
    </header>
  );
};

export default Header;
