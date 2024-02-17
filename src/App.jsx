import { BrowserRouter } from "react-router-dom";
import PaginaPrincipal from "./pages/principal/paginaPrincipal";
import './styles/app.css'
import './styles/variables.css'
import './styles/botton.css'




function App() {
  return (
    <BrowserRouter>
      <PaginaPrincipal/>
    </BrowserRouter>
  );
}

export default App;
