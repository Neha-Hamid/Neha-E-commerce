import React, { useContext, useReducer, useEffect, useState } from 'react';
import './Navbar.css';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../Assets/west_logo.png';
import { ShopContext } from '../../Context/ShopContext';

const menuReducer = (state, action) => {
  switch (action.type) {
    case 'SET_MENU':
      return action.menu;
    default:
      return state;
  }
};

const Navbar = () => {
  const [menu, dispatch] = useReducer(menuReducer, 'Shopnow');
  const { getTotalCartItems } = useContext(ShopContext);
  const [user, setUser] = useState('');
  const navigate = useNavigate();

  const refreshUser = () => {
    const loggedIn =
      sessionStorage.getItem('loggedInUser') ||
      localStorage.getItem('loggedInUser');
    if (loggedIn) setUser(loggedIn);
    else setUser('');
  };

  useEffect(() => {
    refreshUser();

    const authHandler = () => refreshUser();
    const menuHandler = (e) => dispatch({ type: 'SET_MENU', menu: e.detail });

    window.addEventListener('auth', authHandler);
    window.addEventListener('menuChange', menuHandler);

    return () => {
      window.removeEventListener('auth', authHandler);
      window.removeEventListener('menuChange', menuHandler);
    };
  }, []);

  const handleLogout = () => {
    sessionStorage.removeItem('loggedInUser');
    localStorage.removeItem('loggedInUser');
    window.dispatchEvent(new Event('auth'));
    setUser('');
    navigate('/login');
  };

  return (
    <>
      {/* Mobile-only (logo visible only on phones via CSS) */}
      <div className="nav_logo_top">
        <img src={logo} alt="logo" />
      </div>

      <div className='Navbar'>
        <div className='position-absolute nav_logo'>
          <img src={logo} alt='logo' />
        </div>

        <div className='my-nav'>
          <ul className='nav_menu'>
            <li onClick={() => dispatch({ type: 'SET_MENU', menu: 'Shopnow' })}>
              <Link style={{ textDecoration: 'none' }} to='/'>
                Shopnow
              </Link>
              {menu === 'Shopnow' ? <hr /> : null}
            </li>
            <li onClick={() => dispatch({ type: 'SET_MENU', menu: 'Men' })}>
              <Link style={{ textDecoration: 'none' }} to='/mens'>
                Men
              </Link>
              {menu === 'Men' ? <hr /> : null}
            </li>
            <li onClick={() => dispatch({ type: 'SET_MENU', menu: 'Women' })}>
              <Link style={{ textDecoration: 'none' }} to='/womens'>
                Women
              </Link>
              {menu === 'Women' ? <hr /> : null}
            </li>
            <li onClick={() => dispatch({ type: 'SET_MENU', menu: 'Kids' })}>
              <Link style={{ textDecoration: 'none' }} to='/kids'>
                Kids
              </Link>
              {menu === 'Kids' ? <hr /> : null}
            </li>
          </ul>
        </div>

        <div className='nav_login_cart'>
          {user ? (
            <>
              <span>{user}</span>
              <button onClick={handleLogout}>Logout</button>
            </>
          ) : (
            <Link to='/login'>
              <button>Login</button>
            </Link>
          )}
          <Link to='/cart'>
            <img src='./images/cart_icon.png' alt='cart' />
          </Link>
          <div className='nav_cart_count'>{getTotalCartItems()}</div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
