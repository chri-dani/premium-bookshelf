import React from 'react'
import { NavLink} from 'react-router-dom';
import { fbLink, igLink, ytLink } from '../data/social_links'
const Footer = (props) => (
    <div>
        <div className="social-media"> 
            <h3>Find us</h3>
            <ul>

                <li>
                    <a href={igLink}>
                        <img className="bookPage__mini_icon" src={"../images/mini_icons/igIcon.jpg"} />
                    </a>
                </li>
                <li>
                    <a href={ytLink}>
                        <img className="bookPage__mini_icon" src={"../images/mini_icons/ytIcon.jpg"} />
                    </a>
                </li>
                <li>
                    <a href={fbLink}>
                        <img className="bookPage__mini_icon" src={"../images/mini_icons/fbIcon.jpg"} />
                    </a>
                </li>
            </ul>
        </div>
    </div>
)

export default Footer;