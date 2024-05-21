import React from 'react'
import BookList from './BookList'
import FilterBox from './FilterBox.js';
import WelcomeModal from './WelcomeModal.js';
import bookObjects from '../data/books.js'

export default class BookshelfApp extends React.Component {
    state = {
        books: bookObjects,
        activeCategories: [],
        showModal:false
    };

    // booksInActiveCategories = () => {
    //     const books = bookObjects;
    //     for(let i; i < activeCategories.length; i++ ){

    //     }
    //     activeBooks = books.filter( (book.category[0]) === ())

    // }


    showBooks = () =>{
        if(this.state.activeCategories.length === 0){
            this.setState( (prevState) => ({
                books: bookObjects    
            }
            ))
        } else {

            this.setState( (prevState) => ({
                books: books.filter( (book) => (book.category.includes(activeCategories[0])))
            }))
        }
    }

    handleAddCategory = (cat) => {
        this.setState( (prevState) => ({
            books: bookObjects    
        }
        ))
        this.setState( (prevState) => ({
            activeCategories: prevState.activeCategories.concat(cat),
            //books: prevState.books.category.filter((book) => books.has(this.state.activeCategories[0])) 
        }
        ))
    };

    handleRemoveCategory = (cat) => {
        if (this.state.activeCategories.includes(cat)) {
            this.setState( (prevSate) => ({
                activeCategories: prevSate.activeCategories.filter( (c) => !(c===cat))
            }))

            // this.setState( (prevState) => ({
            //     books: books.filter((book) => book.category.includes(activeCategories))    
            // }
            // ))

            

        }
    }

    handleOpenModal =() => {
        this.setState({ showModal: true });
        setTimeout( () => {
            this.setState({ showModal: false })
        }, 1000);
    }
    handleCloseModal =() => {
        this.setState({ showModal: false });
      }
    render() {
        console.log(this.state.activeCategories)

        return (
            <div className="bookshelf-app__container">

                {/* <FilterBox 
                    books={this.state.books}
                    activeCategories={this.state.activeCategories}
                    handleAddCategory={this.handleAddCategory}
                    handleRemoveCategory={this.handleRemoveCategory}
                /> */}
                <BookList 
                    books={this.state.books}
                />

            </div>
        )
    }
}

