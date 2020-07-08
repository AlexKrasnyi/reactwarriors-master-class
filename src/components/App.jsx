import React from "react";
import { moviesData } from "../moviesData";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      movies: moviesData
    };
  }
  render() {
    console.log(this);
    return (
      <div>
        {this.state.movies.map(function(movie) {
          return <p>{movie.title}</p>;
        })}
      </div>
    );
  }
}
// let title = "Hello ReactWarriors!";
// function App() {
//   console.log(moviesData);
//   return <div>{title}</div>;
// }

export default App;
