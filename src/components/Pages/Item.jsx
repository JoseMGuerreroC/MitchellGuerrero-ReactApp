import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function Item(){
    const [item, setItem] = useState([]);
    const { id } = useParams();

    function itemDescuento(precio, descuento){
        return Number.parseFloat(precio - ((precio / 100) * descuento)).toFixed(2) ;
    }

    useEffect(() => {
        fetch("/src/components/Pages/Productos.json")
            .then(response => response.json())
            .then(data => {
                setItem(data.filter(item => (item.id == id))[0])
            })
            .catch(error => {
                console.log(error)
            });
    });

    return(
        <>
            <div className="itemContainer">
                <div className="itemImgContainer">
                    <div className="itemImgOptions">
                        <img src={item.imagen} alt={item.name}/>
                        <img src={item.imagen} alt={item.name}/>
                        <img src={item.imagen} alt={item.name}/>
                        <img src={item.imagen} alt={item.name}/>
                        <img src={item.imagen} alt={item.name}/>
                        <img src={item.imagen} alt={item.name}/>
                    </div>
                    <img className="itemImgMain" src={item.imagen} alt={item.name} />
                </div>
                <div className="itemDescriptionContainer">
                    <div className="itemRoute">
                        <Link className="route" to={"/"}>Home</Link>
                        <p className="route">/</p>
                        <p className="route routeDisabled">{item.nombre}</p>
                    </div>
                    <h1 className="itemTitle">{item.nombre}</h1>
                    <h2 className="itemBrand">{item.marca}</h2>
                    {item.oferta ? (
                                    <>
                                        <div className="itemOferta">
                                            <p className="itemPrecio precioNuevo">${itemDescuento(item.precio, item.descuento)}MXN</p>
                                            <p className="itemPrecio precioAnterior">${item.precio}MXN</p>
                                            <p className="itemDescuento">-{item.descuento}%</p>
                                        </div>
                                        

                                    </>
                                ) : (
                                    <div className="itemOferta">
                                    <p className="itemPrecio">$ {item.precio} MXN</p>
                                    </div>
                                )}
                    <div className="itemToCart">
                        <div className="amountToCart">
                            <button>-</button>
                            <p>0</p>
                            <button>+</button>
                        </div>
                        <button className="addToCart">
                            Añadir al carrito
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Item;