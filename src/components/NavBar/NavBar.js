import {Link} from 'react-router-dom';

import logo from '../../multimedia/logo.png';
import CartWidget from '../Cart/CartWidget';
import CartModal from '../Cart/CartModal';

import './NavBar.css';


const NavBar = ()=>{
    return (
        <header className="App-header">
            <nav className="navbar navbar-expand-lg container-fluid navbar-light">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">
                        <img src={logo} alt="Logo del sitio" className="menuLogo" />
                    </Link>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse justify-content-end me-3" id="navbarNav">
                        <ul className="navbar-nav row justify-content-end text-center" style={{width: "50%"}}>
                            <li className="nav-item col-3">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Categorías</a>
                                <ul id="categoriesDropdown" className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><Link className="dropdown-item" to="/category/Jerseys">Jersey's</Link></li>
                                    <li><Link className="dropdown-item" to="/category/Ropa">Ropa</Link></li>
                                    <li><Link className="dropdown-item" to="/category/Otros">Otros</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item col-3">
                                <a className="nav-link text-black">Ofertas!</a>
                            </li>
                            <li className="nav-item col-3">
                                <a className="nav-link text-black">Compras</a>
                            </li>
                            <li className="nav-item col-2">
                                <CartWidget />
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <CartModal modalID="cartModal" />
        </header>
    );
}

export default NavBar;