import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Search from './Search.js'
import Home from './Home.js'
import { Route } from 'react-router-dom'

class BooksApp extends Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
     books: [],
     search: '',
     searchBooks: []
  }

  componentDidMount() {
    BooksAPI.getAll()
      .then((books) => {
        this.setState(() => ({
          books
        }))
      })
  }

  BookUpdate = (book, shelf) => {
    BooksAPI.update(book, shelf)
    .then((book) => {
        this.setState((currentState) => ({
          books: currentState.books.concat([book])
        }));
      });
    this.componentDidMount()
  }

  handleSearch = (search) => {
    if(search)
    {
      BooksAPI.search(search)
        .then((books) => {
          this.setState(() => ({
            searchBooks: books
          }))
        })
    }
    else{
      this.setState(() => ({
        searchBooks: []
      }))
    }
  }

  reset= () => {
    this.setState(() => ({
      searchBooks: [],
      search: ''
    }))
  }

  render() {
    return (
      <div className="app">
        <Route exact path='/' render={() => (
          <Home
            books={this.state.books}
            update = {this.BookUpdate}
          />
        )} />
      <Route path='/search' render={() => (
          <Search
            books={this.state.searchBooks}
            update = {this.BookUpdate}
            handleSearch = {this.handleSearch}
            reset = {this.reset}
          />
        )} />
      </div>
    )
  }
}

export default BooksApp
