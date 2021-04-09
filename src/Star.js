import './App.css';
import React, {useState, newRate} from 'react';
import StarRatingComponent from 'react-star-rating-component';



const Star= ({setRate,newRate}) => {
const [rating, setRating] = useState(1)
const onStarClick=(nextValue, prevValue, name)=> {
   setRate( nextValue);
}
 return ( 
   <>
  <StarRatingComponent 
    name="rate1" 
    starCount={5}
    value={newRate}
    onStarClick={onStarClick}
  />
 </>  
  )}
  export default Star