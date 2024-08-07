import { Link } from 'react-router-dom';
import { CartContext } from "../CartContext/CartContext";
import { useContext, useEffect, useState } from 'react';

function UserCart() {
    const { cart} = useContext(CartContext);
    const [itemCant, setItemCant] = useState(0);

    useEffect(() => {
        let totalProducts = 0;
        cart.forEach((product) => {
            totalProducts += product.quantity;
        })
        setItemCant(totalProducts)
    }, [cart])



    return (
        <>
            <Link to={"/carrito"} className='userCart'>
                <i className="fa-solid fa-cart-shopping"></i>
                <div className="userCartNot">{itemCant}</div>
            </Link>
        </>
    )
}

export default UserCart;