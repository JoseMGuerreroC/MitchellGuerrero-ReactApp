import { useContext, useState } from "react";
import { CartContext } from "../CartContext/CartContext";
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import { Link } from "react-router-dom";

function Checkout() {
    const { cart, cartSubtotal, clearCart, cartLength } = useContext(CartContext);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [orderId, setOrderId] = useState('');
    const [phone, setPhone] = useState('');


    function newOrder() {
        if (name == '') {
            return false;
        }

        if (email == '') {
            return false;
        }

        if (address == '') {
            return false;
        }

        if (phone == '') {
            return false;
        }

        const date = new Date();

        const orderData = {
            buyer: { name: name, email: email, address: address, phone: phone },
            items: cart.map(item => ({ id: item.id, nombre: item.nombre, cantidad: item.quantity, precio: item.precio })),
            date: `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`,
            total: cartSubtotal(),
        }

        const db = getFirestore();
        const ordersCollection = collection(db, 'orders');
        addDoc(ordersCollection, orderData).then(response => {
            setOrderId(response.id);
            clearCart();
        })
    }

    if (cartLength() == 0 && orderId) {
        return (
            <>
                {orderId ?
                    <div className="checkoutFinal">
                        <h1>¡Gracias por tu compra!</h1>
                        <p>El Id de la compra es: <span>{orderId}</span></p>
                        <Link className="checkOutRedirect" to={'/'}>Regresar a la página principal</Link>
                    </div>
                    :
                    ''
                }
            </>
        )
    }

    return (
        <>
            <div className="formCheckoutCont">
                <form className="formCheckout">
                    <div className="formCol">
                        <p>Nombre</p>
                        <input type="text" onInput={(e) => { setName(e.target.value) }} />
                    </div>
                    <div className="formCol">
                        <p>Teléfono</p>
                        <input type="text" onInput={(e) => { setPhone(e.target.value) }} />
                    </div>
                    <div className="formCol">
                        <p>Email</p>
                        <input type="text" onInput={(e) => { setEmail(e.target.value) }} />
                    </div>
                    <div className="formCol">
                        <p>Dirección</p>
                        <input type="text" onInput={(e) => { setAddress(e.target.value) }} />
                    </div>
                    <button type="button" className="formSend" onClick={newOrder}>Generar orden</button>

                </form>
                <table className="tableCheckout">
                    <thead>
                        <tr>
                            <td className="tableText tableTitle">Producto</td>
                            <td className="tableText">Cantidad</td>
                            <td className="tableText">Valor</td>
                        </tr>
                    </thead>
                    <tbody>
                        {cart.map(item => (
                            <tr key={item.id} className="tableItemCont">
                                <td>
                                    <div className="tableItemInfo">
                                        <p className="tableItem">{item.nombre}</p>
                                        <p className="tableItem">{item.marca}</p>
                                        <p className="tableItem">${item.precio} MXN</p>
                                    </div>
                                </td>
                                <td className="tableText">{item.quantity}</td>
                                <td className="tableText">{item.quantity * item.precio}</td>
                            </tr>
                        ))}
                    </tbody>
                    <tfoot>
                        <td className="tableText tableTotal">Total a pagar: <span> ${cartSubtotal()} MXN</span></td>
                    </tfoot>
                </table>
            </div>
        </>
    )
}

export default Checkout;