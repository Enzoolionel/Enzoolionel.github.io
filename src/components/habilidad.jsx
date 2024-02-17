import "../styles/habilidad.css";

const Habilidad = ({ src, alt, habilidad }) => {
  const handleColor = (h) => {
    if (h === "JavaScript") return "#f0da4f31";
    if (h === "Nodejs") return "#68a06331";
    if (h === "React") return "#61dafb31";
    if (h === "Mongo") return "#4DB33D31";
    if (h === "Express") return "#ffffff31";
    if (h === "Python") return "#30699831";
    if (h === "Bootstrap") return "#563d7c31";
    if (h === "Sass") return "#563d7c31";
    if (h === "Git") return "#F1502F31";
  };

  return (
    <article className="habilidad__article">
      <img
        src={src}
        style={{ backgroundColor: handleColor(habilidad) }}
        alt={alt}
        className="habilidad__img"
      />
      <h3 className="habilidad__h3">{habilidad}</h3>
    </article>
  );
};

export default Habilidad;
