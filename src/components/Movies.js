import React from "react";
import { movies } from "../data";

function Movies() {
  return <div>
    <h1>Movies Page</h1>
    {movies.map((movie)=>{
     return (<div>
        <h2>Name: {movie.title}</h2>
        <p>Time: {movie.time}</p>
        <ul>
          Genres:
           {movie.genres.map((genre)=><li>{genre}</li>)}
        </ul>
      </div>
    )})}
  </div>;
}

export default Movies;
