import { useState, useEffect } from "react";
import Perfil from "../../public/Perfil.jpg";
import Icon from "../components/Icon.jsx";
import ChangeModeButton from "../components/ChangeModeButton.jsx";
import { dataNetwork } from "../data/data.js";

const Header = () => {
  const textos = [
    "software developer.",
    "web developer.",
    "Full-stack developer Jr.",
  ];

  const [texto, setTexto] = useState("");
  const [palabraIndex, setPalabraIndex] = useState(0);
  const [letraIndex, setLetraIndex] = useState(0);

  useEffect(() => {
    const palabraActual = textos[palabraIndex];

    if (letraIndex < palabraActual.length) {
      // Mostrar la siguiente letra en el texto
      const timeout = setTimeout(() => {
        setTexto((prevTexto) => prevTexto + palabraActual[letraIndex]);
        setLetraIndex((prevIndex) => prevIndex + 1);
      }, 100); // Velocidad de escritura (en milisegundos)

      return () => clearTimeout(timeout);
    } else {
      // Pausar y reiniciar para pasar a la siguiente palabra
      const timeout = setTimeout(() => {
        setTexto(""); // Reiniciar el texto
        setLetraIndex(0); // Reiniciar el índice de letras
        setPalabraIndex((prevIndex) => (prevIndex + 1) % textos.length); // Pasar a la siguiente palabra
      }, 1000); // Pausa entre palabras

      return () => clearTimeout(timeout);
    }
  }, [letraIndex, palabraIndex]); // Ejecutar efecto cuando letraIndex o palabraIndex cambian

  return (
    <header className="p-6 w-screen sm:w-96 h-[450px] bg-slate-300 dark:bg-slate-800 grid place-items-center grid-rows-2 grid-cols-[100px,1fr]">
      <img
        src={Perfil}
        alt="Avatar del usuario"
        className="h-48 w-48 rounded-full mt-24 border-2 border-slate-800 dark:border-slate-400 mb-2"
      />
      <article className="h-36 w-full mt-20 flex flex-col gap-3 ml-12">
        <h1 className="text-3xl font-semibold text-slate-800 dark:text-slate-300 hover:brightness-200">
          Enzo Peralta
        </h1>
        <h2 className="font-semibold text-slate-800 dark:text-slate-300 hover:brightness-200">
          {texto}|
        </h2>
      </article>
      <ul className="row-start-1 row-end-3 col-start-1 h-full w-full flex flex-col gap-5 justify-center">
        {dataNetwork.map((e, i) => (
          <li key={i}>
            <Icon
              path={e.path}
              className="text-slate-800 dark:text-slate-400 hover:brightness-200 duration-75 hover:translate-x-1 transition-all"
            />
          </li>
        ))}
        <ChangeModeButton />
      </ul>
    </header>
  );
};

export default Header;
