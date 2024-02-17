import "../styles/proyecto.css";

const Proyecto = ({
  href,
  src,
  alt,
  lenguaje,
  titulo,
  texto,
}) => {
  return (
    <article className="proyecto__article">
      <img className="proyecto__img" src={src} alt={alt} />
      <ul className="proyecto__ul">
        {lenguaje}
      </ul>
      <h3 className="proyecto__titulo">{titulo}</h3>
      <p className="proyecto__parrafo">{texto}</p>
      <a target="_blank" href={href} className="proyecto__botton">
        Código fuente
      </a>
    </article>
  );
};

export default Proyecto;
