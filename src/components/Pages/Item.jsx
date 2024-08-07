import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ItemCount from "../ItemCounter/ItemCount";
import { CartContext } from "../CartContext/CartContext";
import { ProductsContext } from "../ProductsContext/ProductsContext";



function Item() {
    const [item, setItem] = useState(null);
    const { id } = useParams();
    const { products, loading } = useContext(ProductsContext);
    const { addItem } = useContext(CartContext);
    const [itemAdded, setItemAdded] = useState(0)
    
    useEffect(() => {
        if(!loading){
            const foundItem = products.find(product => product.id === id);
            if(foundItem){
                setItem(foundItem);
            }else{
                console.log('No existe el documento');
            }
        }
        
    }, [loading, id, products])

    function addItemCart(quantity) {
        let itemPrecioFinal;

        setItemAdded(quantity)

        if (item.oferta) {
            itemPrecioFinal = itemDescuento(item.precio, item.descuento)
        } else {
            itemPrecioFinal = item.precio
        }

        const itemSpecs = {
            id: item.id,
            nombre: item.nombre,
            marca: item.marca,
            precio: itemPrecioFinal,
        }

        addItem(itemSpecs, quantity)

    }

    function itemDescuento(precio, descuento) {
        return Number.parseFloat(precio - ((precio / 100) * descuento)).toFixed(2);
    }

    if(loading || !item){
        return <div className="loadProducts">Loading...</div>;
    }

    return (
        <>
            <div className="itemContainer">
                <div className="itemImgContainer">
                    <div className="itemImgOptions">
                        <img src={item.imagen} alt={item.name} />
                        <img src={item.imagen} alt={item.name} />
                        <img src={item.imagen} alt={item.name} />
                        <img src={item.imagen} alt={item.name} />
                        <img src={item.imagen} alt={item.name} />
                        <img src={item.imagen} alt={item.name} />
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
                    <ItemCount inicial={1} stock={item.stock} onAdd={addItemCart}></ItemCount>
                    {itemAdded > 0 ? (
                        <>
                            <p className="addMessage">{itemAdded == 1 ? 'Se ha agregado ' : <>Se han agregado <span>{itemAdded}</span> piezas de</>} <span>{item.nombre}</span> de {item.marca} al carrito.</p>
                            <Link className="gotoCart" to={'/carrito'}><span>Terminar compra</span><i className="fa-solid fa-cart-shopping"></i></Link>
                        </>
                    ) : (
                        <></>
                    )

                    }
                </div>
            </div>
        </>
    )
}

export default Item;