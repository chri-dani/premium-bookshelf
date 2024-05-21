import React from 'react';
import { NavLink} from 'react-router-dom';

const Header = () => (
  <div className="header">
    <div className="header__container">
      <h1>Premium Bookshelf</h1>
      <ul>
        <li><NavLink to="/" activeClassName="is-active" exact={true}>Book Store</NavLink></li>
        <li><NavLink to="/about" activeClassName="is-active" exact={true}>About</NavLink></li>
        <li><NavLink to="/contact" activeClassName="is-active">Contact </NavLink></li>
        <li><NavLink to="/test" activeClassName="is-active">Test </NavLink></li>
      </ul>
      
    </div>
  </div>
);

export default Header;
