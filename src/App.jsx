import { BrowserRouter } from "react-router-dom";
import PaginaPrincipal from "./pages/principal/paginaPrincipal";
import './styles/app.css'





function App() {
  return (
    <BrowserRouter>
      <PaginaPrincipal/>
    </BrowserRouter>
  );
}

export default App;
