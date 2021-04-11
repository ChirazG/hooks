import logo from './logo.svg';
import './App.css';
import NavBar from "./NavBar.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import MovieList from './MovieList';
import React, {useState} from 'react';
import { v4 as uuidv4 } from 'uuid';
import {BrowserRouter, Route} from 'react-router-dom'
import Description from './Description';



function App() {
  const [keyword, setKeyword] = useState("")
  const [newRate, setNewRate] = useState(1)
  const [movie, setMovie] = useState([
    {id:uuidv4(), image:"/platform.jpg", name:"The platform" , description:" Spanish social science fiction-horror film directed by Galder Gaztelu-Urrutia", date:2019, rate:5, genre:"Science Fiction-horror",trailer:"https://www.youtube.com/embed/RlfooqeZcdY"},
    {id:uuidv4(), image:"https://upload.wikimedia.org/wikipedia/en/a/a6/Stonehearst_Asylum_poster.jpg", name:"Stonehearst Asylum" , description:"  previously known as Eliza Graves, is an American Gothic film directed by Brad Anderson and written by Joseph Gangemi", date:2014, rate:5, genre:"Psychological Thriller",trailer:"https://www.youtube.com/embed/rawTSQ1RKQ0"},
    {id:uuidv4(), image:"https://media.services.cinergy.ch/media/box1600/9969259f538247381524d079e4a11effe35aaf66.jpg", name:"Dark Waters" , description:" American legal thriller film directed by Todd Haynes and written by Mario Correa and Matthew Michael Carnahan", date:2019, rate:3, genre:"Thriller",trailer:"https://www.youtube.com/embed/RvAOuhyunhY"},
    {id:uuidv4(), image:"https://fr.web.img6.acsta.net/medias/nmedia/18/82/69/17/19806656.jpg", name:"Intouchables" , description:"French buddy drama film directed by Olivier Nakache & Éric Toledano", date:2011, rate:2, genre:"Drama",trailer:"https://www.youtube.com/embed/34WIbmXkewU"},
    {id:uuidv4(), image:"https://m.media-amazon.com/images/M/MV5BMTYwMzMwMzgxNl5BMl5BanBnXkFtZTgwMTA0MTUzMDI@._V1_.jpg", name:"Nocturnal Animals" , description:"American neo-noir psychological thriller film written, produced and directed by Tom Ford in his sophomore feature, based on the 1993 novel Tony and Susan by Austin Wright", date:2016, rate:5, genre:"Psychological Thriller",trailer:"https://www.youtube.com/embed/-H1Ii1LjyFU"},
    {id:uuidv4(), image:"https://m.media-amazon.com/images/M/MV5BMTUzMDI0MTc3OV5BMl5BanBnXkFtZTgwMjM0MzI3NDM@._V1_.jpg", name:"Irreplaceable You" , description:"American romantic comedy-drama film directed by Stephanie Laing and written by Bess Wohl", date:2018, rate:5, genre:"Comedy-drama",trailer:"https://www.youtube.com/embed/LKnQVCCX8vU"},
  ]) 
  const search =(text)=>{
    setKeyword(text);

  }
  const setRate =(rate)=>{
    setNewRate(rate);

  }
  const addMovie =(newMovie)=>{
    setMovie([...movie,newMovie])
  }
  
  return (
    <BrowserRouter>
    <div className="App">
      <NavBar addMovie={addMovie} search={search} setRate={setRate} newRate={newRate}/>
      <MovieList  movie={movie.filter(el => el.rate >= newRate && el.name.toUpperCase().includes(keyword.toUpperCase().trim()))}/>
    </div>
    <Route path="/description/:id" render={(props)=><Description {...props} movie={movie}/>}/>
    </BrowserRouter>
    
  );
}

export default App;
