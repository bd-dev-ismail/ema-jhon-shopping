
import { Link } from 'react-router-dom';
import logo from '../../images/Logo.svg';
import './Header.css';
const Header = () => {
    return (
        <nav className='header-nav'>
            <img src={logo} alt="ema-john-logo" />
            <div>
                <Link to="/">Shop</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/about">About</Link>
                
            </div>
        </nav>
    );
};

export default Header;