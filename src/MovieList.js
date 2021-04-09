import './App.css';
import MovieCard from './MovieCard';

import React, {useState} from 'react';

function MovieList({movie}) {
    
  return (
    <div className="movie">
       {movie.map(el => <MovieCard mv={el}/>)} 
       
    </div>
  );
}

export default MovieList;