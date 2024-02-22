import "../styles/proyecto.css";

const Proyecto = ({ href, src, alt, lenguaje, titulo, texto, tema }) => {
  return (
    <article className={`proyecto__article ${tema}`}>
      <img className="proyecto__img" src={src} alt={alt} />
      <ul className="proyecto__ul">{lenguaje}</ul>
      <h3 className={`proyecto__titulo ${tema}`}>{titulo}</h3>
      <p className={`proyecto__parrafo ${tema}`}>{texto}</p>
      <a target="_blank" href={href} className={`proyecto__botton ${tema}`}>
        Código fuente
      </a>
    </article>
  );
};

export default Proyecto;
