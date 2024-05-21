import React from 'react'
import ViewMore from './ViewMore';
import books from '../data/books'


class BookPage extends React.Component {
    componentDidMount() {
        window.scrollTo(0, 0)
    }
    componentDidUpdate() {
        window.scrollTo(0, 0)
    }
    render() {
        const book = books.find((b) => b.id === this.props.match.params.id);
    return (
        
        <div className="bookPage">
            <h1 className="bookPage__title">{book.title}</h1>
            <div className="bookPage__container">
                <img className="bookPage__image" src={"../images/covers/"+book.id+".jpg"}/>
                <div className="bookPage__description">
                    {book.description}
                    <span className="bookPage__buyBox">
                        <a className="bookPage__a" href={book.amazonLink}>Buy now</a>
                    </span>
                </div>

                <ViewMore id={book.id}/>
            </div>
                <ul className="bookPage__ul">
                    <li className="bookPage__li">
                        Language 
                        <img className="bookPage__mini_icon" src={"../images/mini_icons/globeIcon.jpg"} />
                        {book.language}
                    </li>
                    <li className="bookPage__li">
                        Pages 
                        <img className="bookPage__mini_icon" src={"../images/mini_icons/bookIcon.jpg"} />
                        {book.pages}
                    </li>
                    <li className="bookPage__li">
                        Publication Date 
                        <img className="bookPage__mini_icon" src={"../images/mini_icons/calendarIcon.jpg"} />
                        {book.publicationDate}
                    </li>
                </ul>
            
        </div>
    )
    }
    
}
    

export default BookPage;