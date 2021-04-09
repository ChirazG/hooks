import './App.css';
import React, { useState } from 'react';
import StarRatingComponent from 'react-star-rating-component';


const MovieCard = ({ mv }) => {
  const [rating, setRating] = useState(1)
  const onStarClick = (nextValue, prevValue, name) => {
    setRating(nextValue);
  }
  return (
    <div className="mv ">
      <img className="poster" src={mv.image} alt={mv.name} width="170" height="250"></img>
      <h3 className="poster__title">{mv.name}</h3>
      <h6>{mv.genre}</h6>
      <h6>{mv.date}</h6>
      <StarRatingComponent
        name="rate1"
        starCount={5}
        value={mv.rate}
        onStarClick={onStarClick}
      />
      <p className="poster__text">{mv.description}</p>


    </div>
  );
}

export default MovieCard;