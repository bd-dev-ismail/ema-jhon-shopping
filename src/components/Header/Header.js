
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/UserContext';
import logo from '../../images/Logo.svg';
import './Header.css';
const Header = () => {
    const {user} = useContext(AuthContext)
    return (
        <nav className='header-nav'>
            <Link to="/">

            <img src={logo} alt="ema-john-logo" />
            </Link>
            <div>
                <Link to="/">Shop</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/about">About</Link>
                <Link to="/login">Login</Link>
                <Link to="/signup">SignUp</Link>
            </div>
        </nav>
    );
};

export default Header;