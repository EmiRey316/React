import './Footer.css';
import instagramLogo from '../../multimedia/instagramLogo.png';
import twitterLogo from '../../multimedia/twitterLogo.png';
import facebookLogo from '../../multimedia/facebookLogo.png';

const Footer = ()=>{
    return <footer>
        <div className="footerContactos">
            {/*Contenedor para información de contacto*/}
            <h2>Información de contacto</h2>
            {/*Listado con los contactos*/}
            <ul className="contactosListado">
                <li>Dirección: Calle 111</li>
                <li>Teléfono: 99999999</li>
                <li>Mail: contacto@mail.com</li>
            </ul>
        </div>
        <div className="footerRedes">
            {/*Contenedor para Redes Sociales, con con logo y enlaces a las redes oficiales*/}
            <h2>Redes oficiales</h2>
            <div className="footerRedesIconos">
                <a href="https://www.instagram.com/steelers/">
                    <img src={instagramLogo} alt="Logo de Instagram" className="footerRedesImg" />
                </a>
                <a href="https://twitter.com/steelers?lang=es">
                    <img src={twitterLogo} alt="Logo de Twitter" className="footerRedesImg" />
                </a>
                <a href="https://www.facebook.com/steelers/">
                    <img src={facebookLogo} alt="Logo de Facebook" className="footerRedesImg" />
                </a>
            </div>
        </div>
        <p>&copy; Emiliano Rey, 2021</p>
    </footer>
}

export default Footer;