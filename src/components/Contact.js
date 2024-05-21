import React from 'react'
import { fbLink, igLink, ytLink } from '../data/social_links'


export default class Contact extends React.Component {
    componentDidMount() {
        window.scrollTo(0, 0)
      }
    render() {
        return (
        <div>
            <div className="contact-page"> 
            <ul>
                <li>
                    <h2>Email</h2>
                    <p>bookshelfpremium@gmail.com</p>
                </li>
                <li>
                    <h2>Instagram</h2>
                    <a href={igLink}>
                        <img className="bookPage__mini_icon" src={"../images/mini_icons/igIcon.jpg"} />
                    </a>
                </li>
                <li>
                    <h2>YouTube&nbsp;&nbsp;</h2>
                    <a href={ytLink}>
                        <img className="bookPage__mini_icon" src={"../images/mini_icons/ytIcon.jpg"} />
                    </a>
                </li>
                <li>
                    <h2>Facebook</h2>
                    <a href={fbLink}>
                        <img className="bookPage__mini_icon" src={"../images/mini_icons/fbIcon.jpg"} />
                    </a>
                </li>
            </ul>
        </div>
    </div>
        )
    }
}
