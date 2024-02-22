import "./home.css";
import imgPrincipal from "../../assets/principal.png";

const Home = ({ tema }) => {
  return (
    <main id="home" className="contenedor__home">
      <section className="home__section">
        <div className="contenedor__img">
          <img
            src={imgPrincipal}
            alt="Texto de la imagen"
            className="section--img"
          />
        </div>
        <h1 className={`section--titulo ${tema}`}>
          <span className={`span--e ${tema}`}>E</span>nzo Lionel Peralta
        </h1>
        <h2 className={`section--subtitulo ${tema}`}>Desarrollador Web</h2>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/enzo-peralta-b64132216/"
          className={`section--botton ${tema}`}
        >
          Contactame
        </a>
      </section>
    </main>
  );
};

export default Home;
