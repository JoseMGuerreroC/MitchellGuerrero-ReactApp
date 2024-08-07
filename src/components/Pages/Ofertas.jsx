import { useContext} from "react";
import { Link } from "react-router-dom";
import { ProductsContext } from "../ProductsContext/ProductsContext";

function Ofertas() {
    const {products, loading} = useContext(ProductsContext);

    const filteredProducts = products.filter(product => product.oferta);
    
    function itemDescuento(precio, descuento){
        return Number.parseFloat(precio - ((precio / 100) * descuento)).toFixed(2) ;
    }

    if(loading){
        return <div className="loadProducts">Loading...</div>;
    }

    return (
        <>
            <h1 className="productosTitle">Ofertas</h1>
            <div className="dataCont">
                <p className="numberItems">{filteredProducts.length} productos</p>
            </div>
            <div className="productosCont">
            {filteredProducts.map(item => (
                <Link to={`/item/${item.id}`} key={item.id} className="itemCatalog">
                    <img src={item.imagen} alt={item.nombre} />
                    <p className="itemCatalogTitulo">{item.marca}</p>
                    <p className="itemCatalogNombre">{item.nombre}</p>
                    <div className="itemCatalogOfertas">
                        <p className="itemCatalogPrecio precioNuevo">${itemDescuento(item.precio, item.descuento)}MXN</p>
                        <p className="itemCatalogPrecio precioAnterior">${item.precio}MXN</p>
                    </div>
                    <p className="itemCatalogDescuento">-{item.descuento}%</p>
                </Link>
            ))}
            </div>
        </>
    )
}
export default Ofertas;  