import React, {Component} from 'react'
import {Header, MoviesDetails, MoviesList } from './components';


class App extends Component{
  render () {
    return (
      <>
      <div className="App d-flex flex-column">
         <Header/>
      </div>
      <div className="d-flex flex-row min-vh-100 pt-4 p-2">
        <MoviesList/>
        <MoviesDetails/>
      </div>
      </>
    )
  }
}
export default App;
