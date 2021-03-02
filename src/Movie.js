import React, { Component } from "react";
import './Movie.css';

export default class Movie extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div className="movie" onClick={this.togglePop}>
                <div className="movie-title">
                    <h3>{this.props.movieInfo.title}</h3>
                </div>
                <h5 className="movie-date">({this.props.movieInfo.release_date})</h5>
                <img className="movie-image" src={"https://image.tmdb.org/t/p/w92" + this.props.movieInfo.poster_path } alt="Movie Poster" />
            </div>

        );
    }
}
