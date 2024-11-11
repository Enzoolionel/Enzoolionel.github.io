import Header from "./layout/Header.jsx";
import Main from "./layout/Main.jsx";
import Footer from "./layout/Footer.jsx";

const App = () => {
  return (
    <section className="flex flex-col items-center bg-slate-700">
      <Header />
      <Main />
      <Footer />
    </section>
  );
};

export default App;
