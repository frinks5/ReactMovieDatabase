import React from 'react';
import axios from 'axios';
import './App.css';
import PopUp from "./popup";
import Movie from "./Movie";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: [],
      seen: false
    }
  }

  componentDidMount() {
    this.loadMovies();
  }

  loadMovies() {
    // go grab (aka get) all the data from some url
    const url = "https://api.themoviedb.org/3/discover/movie?api_key=b6fbc7f3f313bd395902af464ef47262&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1";
    axios.get(url)
      .then(response => {

        // then put just the movies (not everything) into the state
        this.setState({ movies: response.data.results });
        console.log(this.state.movies)
      });


  }




  render() {
    // let movies = [];
    // for(let i = 0; i < this.state.movies.length; i++)
    // {
    //   movies.push(<h2>{this.state.movies[i].title}</h2>)
    // }

    return (
      <div className="App">
        <h1>Check out these movies. Or don't.  I don't care.</h1>
        <h6>Click on movie image to go to movie page</h6>
        <div className="movies">
          {this.state.movies.map(movie => {
            return (
              <Movie movieInfo={movie} />
            );
          }
          )
          }
        </div>
      </div>
    );
  }
}

export default App;


