const Link = ({ href, className, tema, texto}) => {
  return (
    <a href={href} className={`${className} ${tema}`}>
      {texto}
    </a>
  );
};

export default Link;
