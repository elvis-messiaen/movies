/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react'

class MoviesDetails extends Component {
    render() {
        return (
                <div className="w-25 bg-light p-4 d-flex flex-column">
                     <h5>{ this.props.movie.title }</h5>
                     <hr className="w-100" />
                <div>
                   
                    <img alt="movie" className="d-block mx-auto w-100" src={ this.props.movie.img } />
                </div>
                <hr className="w-100" />
                     <span className="text-secondary">{ this.props.movie.details }</span>
                     <span>{ this.props.movie.description }</span>
                </div>
        )
    }
}

export default MoviesDetails
