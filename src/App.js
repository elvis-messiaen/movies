import React, {Component} from 'react'
import {Header, MoviesDetails, MoviesList } from './components';


class App extends Component{
  render () {
    return (
      <>
      <div className="App">
         <Header/>
      </div>
      <div className="d-flex flex-row">
        <MoviesList/>
        <MoviesDetails/>
      </div>
      </>
    )
  }
}
export default App;
