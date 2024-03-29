import "./sobreMi.css";

const SobreMi = ({ tema }) => {
  return (
    <section id="sobre-mi" className="contenedor__sobreMi">
      <h1 className={`sobreMi__h1 ${tema}`}>Sobre mí</h1>
      <p className={`sobreMi__p ${tema}`}>
        "Me considero un individuo altamente motivado y autodidacta,
        constantemente en busca de la mejora continua. Dedico una parte
        significativa de mi tiempo al estudio y al desarrollo profesional,
        desafiándome a superar obstáculos y alcanzar nuevos niveles de
        excelencia. La música es una pasión que me inspira y motiva,
        ofreciéndome un escape creativo y un enriquecimiento personal. Mi
        compromiso con el crecimiento personal y profesional es evidente en mi
        enfoque proactivo hacia los desafíos, buscando siempre nuevas
        oportunidades para aprender, crecer y contribuir de manera significativa
        en todos los aspectos de mi vida."
      </p>
    </section>
  );
};

export default SobreMi;
