
import logo from '../../images/Logo.svg';
import './Header.css';
const Header = () => {
    return (
        <nav className='header-nav'>
            <img src={logo} alt="ema-john-logo" />
            <div>
                <a href="/shops">Shops</a>
                <a href="/Orders">Orders</a>
                <a href="/Inventory">Inventory</a>
                <a href="/About">About</a>
                
            </div>
        </nav>
    );
};

export default Header;