import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import axios from 'axios';
import MovieCard from './MovieCard'

const Movie = (props) => {
  const [movie, setMovie] = useState();
  // STEP 5 - if our component needs to be aware of a parameter in the URL of the browser:
  const { id } = useParams();
  useEffect(() => {
       axios
        .get(`http://localhost:5000/api/movies/${id}`)
        .then(response => {
          setMovie(response.data);
        })
        .catch(error => {
          console.error(error);
        });

  },[]);
  
  // Uncomment this only when you have moved on to the stretch goals
  // const saveMovie = () => {
  //   const addToSavedList = props.addToSavedList;
  //   addToSavedList(movie)
  // }

  if (!movie) {
    return <div>Loading movie information...</div>;
  }

  const { title, director, metascore, stars } = movie;
  return (
    <div className="save-wrapper">
      <MovieCard movie={movie} className="movie-card" />
      <div className="save-button">Save</div>
    </div>
  );
}

export default Movie;
