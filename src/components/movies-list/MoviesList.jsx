import React, { Component } from 'react'
import MovieElement from './MovieElement/MovieElement';

class MoviesList extends Component {
    render() {
        return (
            <div className="w-75 d-flex flex-row flex-wrap justify-content-center ">
                {this.props.movie.map((m,index) => 
                     <MovieElement key={m.title}  movie= {m  } updateSelectedMovie={ () => {this.props.updateSelectedMovie(index )}}/>
                )}
            </div>
        )
    }
}

export default MoviesList
