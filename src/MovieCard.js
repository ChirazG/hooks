import './App.css';
import React, { useState } from 'react';
import StarRatingComponent from 'react-star-rating-component';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';


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
      <Link to={`/description/${mv.id}`}><div className="col2"><div className="watch-btn"><button type="button" class="btn btn-outline-success">WATCH TRAILER</button></div>
            </div></Link>


    </div>
  );
}

export default MovieCard;