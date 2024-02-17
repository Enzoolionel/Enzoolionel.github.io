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

const Habilidades = () => {
  return (
    <section id="habilidades" className="contenedor__habilidades">
      <h1 className="habilidades__h1">Habilidades</h1>
      <article className="habilidades__article">
        <Habilidad src={jsIcon} habilidad="JavaScript" />
        <Habilidad src={nodeIcon} habilidad="Nodejs" />
        <Habilidad src={reactIcon} habilidad="React" />
        <Habilidad src={mongoIcon} habilidad="Mongo" />
        <Habilidad src={expressIcon} habilidad="Express" />
        <Habilidad src={pythonIcon} habilidad="Python" />
        <Habilidad src={bootstrapIcon} habilidad="Bootstrap" />
        <Habilidad src={sassIcon} habilidad="Sass" />
        <Habilidad src={gitIcon} habilidad="Git" />
      </article>
    </section>
  );
};

export default Habilidades;
