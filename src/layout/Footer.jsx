import logo from "../../public/logo.png";

const Footer = () => {
  return (
    <footer className="h-38 w-screen lg:w-96 bg-slate-800 p-3">
      <section className="flex justify-between w-full h-full p-1 opacity-80 bg-slate-700 border border-slate-300 rounded-lg">
        <article className="flex flex-col pl-3 justify-center leading-5 text-slate-400">
          <a href="#">Link Numero 1</a>
          <a href="#">Link Numero 2</a>
          <a href="#">Link Numero 3</a>
          <a href="#">Link Numero 4</a>
        </article>
        <article className="flex items-center">
          <img src={logo} alt="#" className="mr-5 h-14 w-14 rounded-full" />
          <div className="relative top-8 right-1">⬆️</div>
        </article>
      </section>
      <h3 className="text-center mt-2 text-slate-300">©️ _EnzooLionel | ❤️</h3>
    </footer>
  );
};

export default Footer;
