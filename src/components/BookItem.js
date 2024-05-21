import React from 'react';
import {Link} from 'react-router-dom'


export default class BookItem extends React.Component{
    componentDidMount() {
        window.scrollTo(0, 0)
      }
    render() {
        return (
            <div className="book-banner">
                <Link className="bookLink" to={"/book/" + this.props.id} >
                    <img className="bookItem__image" src={"./images/covers/"+this.props.id+".jpg"}/>
                    <p className="imgCaption">{this.props.title.split(':')[0]}</p>
                    { this.props.title.split(':')[0].length <= 24 && <br></br>}
                </Link>
            </div>
    );
    }
}
