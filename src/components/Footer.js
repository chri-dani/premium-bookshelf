import React from 'react'
import SocialMedia from './SocialMedia'
import { NavLink} from 'react-router-dom';
import { igLink, ytLink } from '../data/social_links'
const Footer = (props) => (
    <div>
        <div className="footer">
            <section className="footer-pages">
                <h3>Navigate</h3>
                <ul>
                    <li><NavLink to="/" activeClassName="is-active" exact={true}>Book Store</NavLink></li>
                    <li><NavLink to="/about" activeClassName="is-active" exact={true}>About</NavLink></li>
                    <li><NavLink to="/contact" activeClassName="is-active">Contact </NavLink></li>
                </ul>
            </section>
            <SocialMedia />
        </div>
    </div>
)

export default Footer;