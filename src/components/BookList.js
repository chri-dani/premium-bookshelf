import React from 'react';
import BookItem from './BookItem';

export default class BookList extends React.Component {
    componentDidMount() {
        window.scrollTo(0, 0)
    }
    render(){
        return (
            <div className="book-list__container">
                <p className="book-list__side-title book-list__side-title--left">PREMIUM</p>
                <div className="book-list__bookCatalog"> 
                    <ul className='circles'>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                    {
                        this.props.books.map((book, index) => (
                            <BookItem className="book-item__from-list"
                            key={book.id}
                            id={book.id}
                            count={index + 1}
                            title= {book.title}
                            description= {book.description}
                            />
                        ))
                    }
                </div>
                <p className="book-list__side-title">BOOKSHELF</p>
            </div>
        )
    }
    
}
