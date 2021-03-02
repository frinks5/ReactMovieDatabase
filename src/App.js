import React from 'react';
import axios from 'axios';
import './App.css';
import Movie from "./Movie";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: [],
      selection: 'vote_count'
    };
    this.handleSelChange = this.handleSelChange.bind(this);
  }

  handleSelChange(event) {
    this.setState({ selection: event.target.value })
    this.loadMovies();
  }


  componentDidMount() {
    this.loadMovies();
  }
  componentDidUpdate() {
    this.loadMovies();
  }

  loadMovies() {
    // Load selected movie list and pop into movies.
    const url = "https://api.themoviedb.org/3/discover/movie?api_key=b6fbc7f3f313bd395902af464ef47262&language=en-US" + "&sort_by=" + this.state.selection + ".desc" + "&include_adult=false&include_video=false&page=1";
    console.log(url);
    axios.get(url)
      .then(response => {

        // then put just the movies (not everything) into the state
        this.setState({ movies: response.data.results });

      });
  }


  render() {
    return (
      <div className="App">
        <div className="Screen">

          <h1>Check out these movies!!</h1>
          <h3>Selected from TheMovieDB.org</h3>

          {/* Let user select how to display the movies */}
          <label for="selectMovie">Select based on  </label>
          <select id="selectMovie" name="selectMovie" size="1"
            value={this.state.selection} onChange={this.handleSelChange}>
            <option value="popularity">Popularity</option>
            <option value="primary_release_date">Release Date</option>
            <option value="vote_count">Vote Count</option>
          </select>

          <div className="movies">
            {/*} for each movie in movies, display the movie */}
            {this.state.movies.map(movie => {
              return (
                <Movie movieInfo={movie} />
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default App;


