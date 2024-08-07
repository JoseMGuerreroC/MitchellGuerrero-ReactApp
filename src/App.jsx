import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from './components/Navbar/Navbar.jsx';
import ItemListContainer from "./components/Pages/ItemListContainer.jsx";
import Ofertas from "./components/Pages/Ofertas.jsx";
import Carrito from "./components/Pages/Carrito.jsx";
import Item from "./components/Pages/Item.jsx";
import Checkout from "./components/Pages/Checkout.jsx";

import { CartProvider } from "./components/CartContext/CartContext.jsx";
import { ProductsProvider } from "./components/ProductsContext/ProductsContext.jsx";

function App() {

  return (
    <>
      <BrowserRouter>
        <ProductsProvider>
          <CartProvider>
            <Navbar />
            <Routes>
              <Route path={"/"} element={<ItemListContainer></ItemListContainer>}></Route>
              <Route path={"/categorias/:idCategoria"} element={<ItemListContainer></ItemListContainer>}></Route>
              <Route path={"/ofertas"} element={<Ofertas></Ofertas>}></Route>
              <Route path={"/carrito"} element={<Carrito></Carrito>}></Route>
              <Route path={"/checkout"} element={<Checkout></Checkout>}></Route>
              <Route path={"/item/:id"} element={<Item></Item>}></Route>
            </Routes>
          </CartProvider>
        </ProductsProvider>
      </BrowserRouter>
    </>
  )
}

export default App
