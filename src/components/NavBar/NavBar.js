import logo from '../../multimedia/logo.png';
import './NavBar.css';
import CartWidget from '../Cart/CartWidget';
import CartModal from '../Cart/CartModal';

const NavBar = ()=>{
    return (
        <header className="App-header">
            <nav className="navbar navbar-expand-lg container-fluid navbar-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="index.html">
                        <img src={logo} alt="Logo del sitio" className="menuLogo" />
                    </a>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse justify-content-end me-3" id="navbarNav">
                        <ul className="navbar-nav row justify-content-end text-center" style={{width: "50%"}}>
                            {/*De momento todos los links llevan a index*/}
                            <li className="nav-item col-3">
                                <a className="nav-link text-black" href="index.html">Categorías</a>
                            </li>
                            <li className="nav-item col-3">
                                <a className="nav-link text-black" href="index.html">Ofertas!</a>
                            </li>
                            <li className="nav-item col-3">
                                <a className="nav-link text-black" href="index.html">Compras</a>
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