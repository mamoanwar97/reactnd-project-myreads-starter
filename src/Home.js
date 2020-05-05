import React from 'react'
import { Link } from 'react-router-dom'
import Shelf from './Shelf.js'

const Home = (props) => (
  <div className="list-books">
    <div className="list-books-title">
      <h1>MyReads</h1>
    </div>
    <div className="list-books-content">
      <div>
        <Shelf title = 'Currently Reading' books={props.books.filter((book) => book.shelf === "currentlyReading")} update = {props.update}/>
        <Shelf title = 'Want to Read' books={props.books.filter((book) => book.shelf === "wantToRead")} update = {props.update}/>
        <Shelf title = 'Read' books={props.books.filter((book) => book.shelf === "read")} update = {props.update}/>
      </div>
    </div>
    <div className="open-search">
      <Link to='/search' className="Link">Add a book</Link>
    </div>
  </div>

);
export default Home;
