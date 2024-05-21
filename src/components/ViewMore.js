import React from 'react'
import {Link} from 'react-router-dom'
import BookItem from './BookItem';
import books from '../data/books'

export default class ViewMore extends React.Component {

    generateRandomBooks = () => {
        const indexSelected = books.findIndex( (book) => book.id === this.props.id)   
            
        let index = Math.floor(Math.random() * (books.length-1) + 1)
        while(index === indexSelected || index === indexSelected+1 || index === indexSelected-1){
            index = Math.floor(Math.random() * (books.length-1) + 1)
            console.log(index)
        }
        return [books[index], books[index-1]]

        //return [books[index], books[index-1], books[index+1]]
    }

    render() {
        const viewMoreBooks = this.generateRandomBooks();
        return (
            <div className="view-more">
                <h1>View More</h1>
                {
                viewMoreBooks.map((book, index) => (
                    <div className='view-more-content'>
                        <Link key={index} to={"/book/" + book.id} >
                            <img src={"../images/covers/"+book.id+".jpg"}/>
                        </Link>
                        <p>{book.title.split(':')[0]}</p>
                    </div> 
                ))
                }
            </div>
        )
    }
}
