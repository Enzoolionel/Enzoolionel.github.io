import { CiPhone, CiHome, CiFolderOn } from "react-icons/ci";

export const Pages = [
  {
    id: 1,
    title: "Inicio",
    route: "/",
    icon: <CiHome size={27} className=" h-16 w-16 p-1" />,
  },
  {
    id: 2,
    title: "Yo",
    route: "/yo",
    icon: <CiFolderOn size={27} className="h-16 w-16 p-1" />,
  },
  {
    id: 3,
    title: "Contacto",
    route: "/contacto",
    icon: <CiPhone size={27} className="h-16 w-16 p-1" />,
  },
  {
    id: 4,
    title: "Portfolio",
    route: "/portfolio",
    icon: <CiFolderOn size={27} className="h-16 w-16 p-1" />,
  },
];
