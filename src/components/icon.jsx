const Icon = ({href, className, role, style, viewBox, xmlns, title, d}) => {
  return (
    <a href={href} target="_blank" className={className}>
        <svg role={role} style={style} viewBox={viewBox} xmlns={xmlns}>
          <title>{title}</title>
          <path d={d}/>
        </svg>
    </a>
  );
};

export default Icon;

