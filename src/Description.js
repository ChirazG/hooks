import React, {useState,useEffect} from 'react'
import { Link } from 'react-router-dom';
import StarRatingComponent from 'react-star-rating-component';
import {BrowserRouter, Route, Router} from 'react-router-dom'

const Description = (props) => {
    console.log(props)
    const [rating, setRating] = useState(1)
    const [mv, setMv] = useState(null)
    useEffect(()=> {setMv(props.movie.filter (el => el.id === props.match.params.id)[0])})

    const onStarClick = (nextValue, prevValue, name) => {
        setRating(nextValue);
      }
    return (
        <div className="mv2">
            
            
          {mv && (<div >
          <iframe width="560" height="315" src={mv.trailer} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
          </iframe>
     <h3 className="poster__title">{mv.name}</h3>
     <h6>{mv.genre}</h6>
     <h6>{mv.date}</h6>
    <StarRatingComponent
      name="rate1"
     starCount={5}
      value={mv.rate}
       onStarClick={onStarClick}
    />
     <p className="poster__text2">{mv.description}</p>
     <div className="col2"><div className="watch-btn"><button type="button" class="btn btn-outline-success" onClick={props.history.goBack}>Back</button></div></div>
     <div className="col2"><div className="watch-btn"><button type="button" class="btn btn-outline-success" onClick={props.history.goForward}>Forword</button></div></div> 
     <Link to="/app"><div className="col2"><div className="watch-btn"><button type="button" class="btn btn-outline-success" >Home</button></div></div></Link>   
         </div>)}
         </div>


   
       
    )
}

export default Description;