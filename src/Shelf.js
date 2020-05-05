import React from 'react'
import Book from './Book.js'

const Shelf = (props) => (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{props.title}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {props.books.length > 0? props.books.map((book)=> <Book key={book.id} book={book} update = {props.update} />):(<p>No books here</p>)}
        </ol>
      </div>
    </div>
)


export default Shelf;
