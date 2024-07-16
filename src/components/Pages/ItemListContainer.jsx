import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import './Style.css';

function ItemList() {
    const [products, setProducts] = useState([]);
    const { idCategoria } = useParams();

    useEffect(() => {
        fetch("/src/components/Pages/Productos.json")
            .then(response => response.json())
            .then(data => {
                if (!idCategoria) {
                    setProducts(data)
                } else {
                    setProducts(data.filter(item => (item.categoria == idCategoria)))
                }
            })
            .catch(error => console.log(error))
    })

    function itemDescuento(precio, descuento){
        return Number.parseFloat(precio - ((precio / 100) * descuento)).toFixed(2) ;
    }

    function formatoTitulo(titulo){
        if(titulo.includes('-')){
            return titulo.split('-').join(' ').toUpperCase();
        }else{
            return titulo.toUpperCase();
        }
    }

    return (
        <>
            {idCategoria ? (
                <h1 className="productosTitle">{formatoTitulo(idCategoria)}</h1>
            ) : (
                <>
                    <div className="hero">
                        <video className="heroVideo" autoPlay muted loop>
                            <source src="/src/assets/img/midierHero.mp4" type="video/mp4" />
                        </video>
                        <h1 className="heroTitle">Midier.</h1>
                        <Link to={"/ofertas"} className="heroOfertas">Ve nuestras ofertas</Link>
                    </div>
                    <h1 className="productosTitle">TODOS LOS PRODUCTOS</h1>
                </>
            )}
            <div className="dataCont">
                <p className="numberItems">{products.length} productos</p>
            </div>
            <div className="productosCont">
                {products.map(item => (
                    <Link to={`/item/${item.id}`} key={item.id} className="itemCatalog">
                        {
                            <>
                                <img src={item.imagen} alt={item.nombre} />
                                <p className="itemCatalogTitulo">{item.marca}</p>
                                <p className="itemCatalogNombre">{item.nombre}</p>
                                {item.oferta ? (
                                    <>
                                        <div className="itemCatalogOfertas">
                                            <p className="itemCatalogPrecio precioNuevo">${itemDescuento(item.precio, item.descuento)}MXN</p>
                                            <p className="itemCatalogPrecio precioAnterior">${item.precio}MXN</p>
                                        </div>
                                        <p className="itemCatalogDescuento">-{item.descuento}%</p>

                                    </>
                                ) : (
                                    <p className="itemCatalogPrecio">${item.precio}MXN</p>
                                )}
                            </>
                        }
                    </Link>
                ))}
            </div>
        </>
    )
}

export default ItemList;