import './Style.css'
import { NavLink} from 'react-router-dom';
import UserCart from './CartWidget.jsx';
import NavbarBrand from './NavbarBrand.jsx';
import { useEffect} from 'react';

function Navbar() {

    function ActiveLink({ isActive }) {
        return `navMenuLink ${isActive ? 'active' : ''}`
    };

    return (
        <>
            <nav className='nav'>
                <div className='navMenu'>
                    <NavbarBrand></NavbarBrand>
                    <div className='navMenuItems'>
                        <NavLink to={"/"} className={ActiveLink}>inicio</NavLink>
                        <NavLink to={"/categorias/maquillaje"} className={ActiveLink}>maquillaje</NavLink>
                        <NavLink to={"/categorias/cuidado-de-la-piel"} className={ActiveLink}>cuidado de la piel</NavLink>
                        <NavLink to={"/ofertas"} className={ActiveLink}>ofertas</NavLink>
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
