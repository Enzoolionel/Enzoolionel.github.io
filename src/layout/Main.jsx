import Card from "../components/Card";
import Icon from "../components/Icon";
import { routes } from "../data/data.js";

const Main = () => {
  return (
    <main className="dark:bg-slate-800 bg-slate-300 h-96 lg:w-96 flex flex-wrap gap-3 justify-center content-center">
      <Card
        titulo="Linkedin"
        subtitulo="Conoce mi Linkedin"
        icon={<Icon className="h-10 w-10" path={routes[0].path} />}
      />
      <Card
        titulo="Linkedin"
        subtitulo="Conoce mi Linkedin"
        icon={<Icon className="h-10 w-10" path={routes[0].path} />}
      />
      <Card
        titulo="Linkedin"
        subtitulo="Conoce mi Linkedin"
        icon={<Icon className="h-10 w-10" path={routes[0].path} />}
      />
      <Card
        titulo="Linkedin"
        subtitulo="Conoce mi Linkedin"
        icon={<Icon className="h-10 w-10" path={routes[0].path} />}
      />
      <Card
        titulo="Linkedin"
        subtitulo="Conoce mi Linkedin"
        icon={<Icon className="h-10 w-10" path={routes[0].path} />}
      />
      <Card
        titulo="Linkedin"
        subtitulo="Conoce mi Linkedin"
        icon={<Icon className="h-10 w-10" path={routes[0].path} />}
      />
    </main>
  );
};

export default Main;
