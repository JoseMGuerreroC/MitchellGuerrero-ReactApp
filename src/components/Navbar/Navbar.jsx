import './Style.css'

import UserCart from './CartWidget.jsx';
import NavbarBrand from './NavbarBrand.jsx';

function Navbar() {
    return (
        <>
            <nav className='nav'>
                <div className='navMenu'>
                    <NavbarBrand></NavbarBrand>
                    <div className='navMenuItems'>
                        <a href='#'>Maquillaje</a>
                        <a href='#'>Cuidado de la piel</a>
                        <a href='#'>Ofertas</a>
                    </div>
                </div>
                <div className='navUser'>
                    <UserCart />
                    <a href='#' className="navUserProfile">
                        <i className="fa-solid fa-user"></i>
                    </a>
                </div>
            </nav>
        </>
    )
}

export default Navbar;
