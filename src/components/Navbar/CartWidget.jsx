import { Link } from 'react-router-dom';

function UserCart(){
    return(
        <>
            <Link to={"/carrito"} className='userCart'>
                <i className="fa-solid fa-cart-shopping"></i>
                <div className="userCartNot">10</div>      
            </Link>
        </>
    )
}

export default UserCart;