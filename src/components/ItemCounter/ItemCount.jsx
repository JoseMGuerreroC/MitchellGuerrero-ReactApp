import { useState } from 'react';
import './ItemCount.css'

function ItemCount({inicial, stock, onAdd}) {
    const [quantity, setQuantity] = useState(inicial)

    function increment(){
        if(quantity < stock){
            setQuantity(quantity + 1)
        }
    }

    function decrement(){
        if(quantity > 1){
            setQuantity(quantity - 1)
        }   
    }

    return (
        <>
            <div className="itemToCart">
                <div className="amountToCart">
                    <button onClick={decrement} className='remove'>-</button>
                    <p>{quantity}</p>
                    <button onClick={increment} className='add'>+</button>
                </div>
                <button className="addToCart" onClick={() => onAdd(quantity)} disabled={!stock}>
                    Añadir al carrito
                </button>
            </div>
            <p className="itemStock">En stock: {stock} </p>
        </>
    )
}

export default ItemCount;