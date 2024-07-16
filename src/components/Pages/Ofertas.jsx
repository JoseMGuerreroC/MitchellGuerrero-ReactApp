import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Ofertas() {
    const [products, setProducts] = useState([]);
    
    function itemDescuento(precio, descuento){
        return Number.parseFloat(precio - ((precio / 100) * descuento)).toFixed(2) ;
    }

    useEffect(() => {
        fetch("/src/components/Pages/Productos.json")
            .then(response => response.json())
            .then(data => { setProducts(data.filter(item => (item.oferta == true))) })
            .catch(error => console.log(error))
    })

    return (
        <>
            <h1 className="productosTitle">Ofertas</h1>
            <div className="dataCont">
                <p className="numberItems">{products.length} productos</p>
            </div>
            <div className="productosCont">
            {products.map(item => (
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