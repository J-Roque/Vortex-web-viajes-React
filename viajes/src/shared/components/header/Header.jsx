import './Header.css';
import dcoding from '../../../assets/dcoding.png'
function Header() {
    return (
        <header className='header'>
            <div className="header__contact">
                <ul className="contact__item">
                    <li className='item__li'>
                        <i class='bx bx-dollar' ></i>Us Dolar
                    </li>
                    <li className='item__li'>
                        <i class='bx bx-phone-call' ></i> 980 900 1021
                    </li>
                </ul>
                <ul className="contact__item">
                    <li className='item__li'>
                        <i class='bx bx-log-in-circle'></i> Login
                    </li>
                    <li className='item__li'>
                        <i class='bx bxs-user-plus' ></i> Register
                    </li>
                    <li className='item__li'>
                        <i class='bx bxl-squarespace' ></i> Ingles
                    </li>
                </ul>
            </div>
            <div className='header__nav'>
                <div className='nav__logo'>
                 <img src={dcoding} alt="logo" />
                </div>
                <nav className='nav'>
                 <ul className='nav__ul'>
                    <li className='nav_li'><a href="#">Home</a></li>
                    <li className='nav_li'><a href="#">Hoteles</a></li>
                    <li className='nav_li'><a href="#">Fgles</a></li>
                    <li className='nav_li'><a href="#">Vocaion</a></li>
                    <li className='nav_li'><a href="#">Actividades</a></li>
                    <li className='nav_li'><a href="#">Paginas</a></li>
                    <li className='nav_li'><a href="#">Blogs</a></li>
                    <li className='nav_li'><a href="#">Contacto</a></li>
                    <li className='nav_li btnbusqueda'><i class='bx bxs-washer' ></i></li>
                 </ul>
                </nav>
            </div>
        </header>
    )
}
export default Header 