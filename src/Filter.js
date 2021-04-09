import './App.css';
import MovieCard from './MovieCard';
import MovieList from './MovieList';
import React, {useState} from 'react';

function Filter() {
  const [title, setTitle] = useState()  
  const [rate, setRate] = useState()  
  return (
    <div className="">
        <h1>{title}</h1>
        <h1>{rate}</h1>

    </div>
  );
}

export default Filter;