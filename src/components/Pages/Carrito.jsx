import { useContext, useEffect, useState } from "react";
import { CartContext } from "../CartContext/CartContext";
import { Link } from "react-router-dom";

function Carrito() {
    const { cart, cartSubtotal, removeItem, clearCart, cartLength } = useContext(CartContext);
    const [shipping, setShipping] = useState(0);
    const [discount, setDiscount] = useState(0);
    const [cartTotal, setCartTotal] = useState(cartSubtotal());

    useEffect(() =>{
        const total = cartSubtotal() + shipping - discount;
        setCartTotal(total);
    }, [cartSubtotal, shipping, discount])


    return (
        <>
            <h1 className="titleCart">Carrito de compras</h1>
            {!cartLength() > 0 ? (
                <>
                    <div className="cartEmpty">
                        <h2>No hay productos en el carrito :(</h2>
                        <Link className="cartEmptyLink" to={'/'}><span>Agrega productos al carrito</span></Link>
                    </div>


                </>
            ) : (
                <>
                    <div className="cartContainer">
                        <div className="cartItemsCont">
                            <div className="cartHeader">
                                <button onClick={clearCart} className="cleanCart">Limpiar carrito</button>
                                <div className="cartItemsHeader">
                                    <p>Producto</p>
                                    <p>Cantidad</p>
                                    <p>Valor</p>
                                </div>
                            </div>
                            <div className="cartItemList">
                                {cart.map((item) => (
                                    <div className="cartItem" key={item.id}>
                                        <div className="itemDetails">
                                            <p>{item.marca}</p>
                                            <p>{item.nombre}</p>
                                            <p>${item.precio} MXN</p>
                                        </div>
                                        <div className="itemQuantity">
                                            <p>{item.quantity}</p>
                                            <button onClick={() => removeItem(item.id)}>Quitar</button>
                                        </div>
                                        <div className="itemTotal">
                                            <p>${item.quantity * item.precio} MXN</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="cartDetail">
                            <p className="detailTitle">Resumen del carrito</p>
                            <div className="detailCode">
                                <input type="text" placeholder="Agregar código" />
                                <button>Aplicar</button>
                            </div>
                            <div className="detailCosts">
                                <p>Subtotal</p>
                                <p>{cartSubtotal()}</p>
                            </div>
                            <div className="detailCosts">
                                <p>+ Gastos de envío</p>
                                <p>{shipping}</p>
                            </div>
                            <div className="detailCosts">
                                <p>- Descuentos</p>
                                <p>{discount}</p>
                            </div>
                            <div className="detailCosts detailTotal">
                                <p>Total</p>
                                <p>${cartTotal} MXN</p>
                            </div>
                            <Link to={'/checkout'} className="detailFinish">Terminar compra</Link>
                        </div>
                    </div>

                </>
            )

            }
        </>
    )
}

export default Carrito;