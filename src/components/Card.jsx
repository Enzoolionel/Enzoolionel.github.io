/* eslint-disable react/prop-types */
const Card = ({ icon, titulo, subtitulo }) => {
  return (
    <article className="border border-slate-300 rounded-lg p-1 w-40 text-slate-300 flex justify-between items-center gap-3">
      {icon}
      <div>
        <h1 className="text-slate-300 font-semibold">{titulo}</h1>
        <h2 className="text-slate-500 text-sm">{subtitulo}</h2>
      </div>
    </article>
  );
};

export default Card;
