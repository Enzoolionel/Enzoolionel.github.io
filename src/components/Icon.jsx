/* eslint-disable react/prop-types */
const Icon = ({ path, className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="currentColor"
      className={className}
    >
      <path d={path}></path>
    </svg>
  );
};

export default Icon;
