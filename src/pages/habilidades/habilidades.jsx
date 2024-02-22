import Habilidad from "../../components/habilidad";
import "./habilidades.css";
import jsIcon from "../../assets/jsicon.svg";
import nodeIcon from "../../assets/node-js.svg";
import reactIcon from "../../assets/react-js.svg";
import mongoIcon from "../../assets/mongodb.svg";
import expressIcon from "../../assets/express.svg";
import pythonIcon from "../../assets/python.svg";
import bootstrapIcon from "../../assets/bootstrap.svg";
import sassIcon from "../../assets/sass.svg";
import gitIcon from "../../assets/git.svg";

const Habilidades = ({ tema }) => {
  return (
    <section id="habilidades" className="contenedor__habilidades">
      <h1 className={`habilidades__h1 ${tema}`}>Habilidades</h1>
      <article className="habilidades__article">
        <Habilidad tema={tema} src={jsIcon} habilidad="JavaScript" />
        <Habilidad tema={tema} src={nodeIcon} habilidad="Nodejs" />
        <Habilidad tema={tema} src={reactIcon} habilidad="React" />
        <Habilidad tema={tema} src={mongoIcon} habilidad="Mongo" />
        <Habilidad tema={tema} src={expressIcon} habilidad="Express" />
        <Habilidad tema={tema} src={pythonIcon} habilidad="Python" />
        <Habilidad tema={tema} src={bootstrapIcon} habilidad="Bootstrap" />
        <Habilidad tema={tema} src={sassIcon} habilidad="Sass" />
        <Habilidad tema={tema} src={gitIcon} habilidad="Git" />
      </article>
    </section>
  );
};

export default Habilidades;
