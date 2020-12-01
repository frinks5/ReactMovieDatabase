import React, { Component } from "react";
import './Movie.css';
import PopUp from './popup.js';

export default class Movie extends Component {
    constructor(props) {
        super(props);
        this.state = {
            seen: false
        }
    }

    togglePop = () => {
        this.setState({
          seen: !this.state.seen
        });
      };

    render() {
        return (
            //            <div className="movie" }>
            <div className="movie" onClick={this.togglePop}>
                {this.state.seen ? <PopUp toggle={this.togglePop} /> : null}
                <h2>{this.props.movieInfo.title}</h2>
                <h4>({this.props.movieInfo.release_date})</h4>
                <a href={"https://www.themoviedb.org/movie/" + this.props.movieInfo.id} >
                    <img src={"https://image.tmdb.org/t/p/w92" + this.props.movieInfo.poster_path} />
                </a>


            </div>



        );
    }
}
