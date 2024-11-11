/* eslint-disable react/prop-types */
const Card = ({ icon, titulo, subtitulo }) => {
  return (
    <article className="hover:scale-105 hover:bg-slate-400 border-slate-800 text-slate-800 dark:hover:bg-slate-900  transition-all border dark:border-slate-300 rounded-lg p-1 w-40 dark:text-slate-300 flex justify-between items-center gap-3">
      {icon}
      <div>
        <h1 className="text-slate-800 dark:text-slate-300 font-semibold">
          {titulo}
        </h1>
        <h2 className="text-slate-800 dark:text-slate-500 text-sm">
          {subtitulo}
        </h2>
      </div>
    </article>
  );
};

export default Card;
