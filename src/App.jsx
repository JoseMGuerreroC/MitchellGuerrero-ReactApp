import {BrowserRouter, Routes, Route} from "react-router-dom"
import Navbar from './components/Navbar/Navbar.jsx';
import ItemListContainer from "./components/Pages/ItemListContainer.jsx";
import Ofertas from "./components/Pages/Ofertas.jsx";
import Carrito from "./components/Pages/Carrito.jsx";
import Categorias from "./components/Pages/Categorias.jsx";
import Item from "./components/Pages/Item.jsx";


function App() {

  return (
    <>
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path={"/"} element={<ItemListContainer></ItemListContainer>}></Route>
        <Route path={"/categorias"} element={<Categorias></Categorias>}></Route>
        <Route path={"/categorias/:idCategoria"} element={<ItemListContainer></ItemListContainer>}></Route>
        <Route path={"/ofertas"} element={<Ofertas></Ofertas>}></Route>
        <Route path={"/carrito"} element={<Carrito></Carrito>}></Route>
        <Route path={"/item/:id"} element={<Item></Item>}></Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
