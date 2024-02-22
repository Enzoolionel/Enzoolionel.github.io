import Proyecto from "../../components/proyecto";
import "./proyectos.css";
import servidorImg from "../../assets/servidor.png";
import motorImg from "../../assets/motor.png";

const Proyectos = ({tema}) => {
  return (
    <section id="proyectos" className="contenedor__proyectos">
      <Proyecto
        href="https://github.com/Enzoolionel/basic-car"
        src={servidorImg}
        alt="imagen repositorio"
        titulo="Crud MERN"
        texto="Crud MERN conectado a la base de datos Mongo, es un proyecto 
        que está en su etapa de desarrollo.
        "
        tema={tema}
      />
      <Proyecto
        href="https://github.com/Enzoolionel/app-demo"
        src={motorImg}
        alt="imagen repositorio"
        titulo="Simulación de Motor"
        texto="Simulación de Motor, está basado en objetos, se implementan 
        varias funcionalidades de JavaScript.
        "
        tema={tema}
      />
    </section>
  );
};

export default Proyectos;
