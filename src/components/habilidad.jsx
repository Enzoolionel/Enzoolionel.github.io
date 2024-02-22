import "../styles/habilidad.css";

const Habilidad = ({ src, alt, habilidad, tema }) => {
  const handleColor = (h) => {
    if (h === "JavaScript") {
      if (tema === "dark") {
        return "#f0da4f31";
      }
      if (tema === "light") {
        return "#f0da4f8a";
      }
    }
    if (h === "Nodejs") {
      if (tema === "dark") {
        return "#68a06331";
      }
      if (tema === "light") {
        return "#68a0638a";
      }
    }
    if (h === "React") {
      if (tema === "dark") {
        return "#61dafb31";
      }
      if (tema === "light") {
        return "#61dafb8a";
      }
    }
    if (h === "Mongo") {
      if (tema === "dark") {
        return "#4DB33D31";
      }
      if (tema === "light") {
        return "#4DB33D8a";
      }
    }
    if (h === "Express") {
      if (tema === "dark") {
        return "#ffffff70";
      }
      if (tema === "light") {
        return "#ffffff8a";
      }
    }
    if (h === "Python") {
      if (tema === "dark") {
        return "#30699831";
      }
      if (tema === "light") {
        return "#3069988a";
      }
    }
    if (h === "Bootstrap") {
      if (tema === "dark") {
        return "#563d7c31";
      }
      if (tema === "light") {
        return "#563d7c8a";
      }
    }
    if (h === "Sass") {
      if (tema === "dark") {
        return "#563d7c31";
      }
      if (tema === "light") {
        return "#563d7c8a";
      }
    }
    if (h === "Git") {
      if (tema === "dark") {
        return "#F1502F31";
      }
      if (tema === "light") {
        return "#F1502F8a";
      }
    }
  };

  return (
    <article className={"habilidad__article"}>
      <img
        src={src}
        style={{ backgroundColor: handleColor(habilidad) }}
        alt={alt}
        className="habilidad__img"
      />
      <h3 className={`habilidad__h3 ${tema}`}>{habilidad}</h3>
    </article>
  );
};

export default Habilidad;
