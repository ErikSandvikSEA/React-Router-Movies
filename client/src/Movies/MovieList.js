import React, { useState, useEffect } from 'react';
import MovieCard from './MovieCard'
import axios from 'axios';
import { Link } from 'react-router-dom'

const MovieList = props => {
  const [movies, setMovies] = useState([])
  useEffect(() => {
    const getMovies = () => {
      axios
        .get('http://localhost:5000/api/movies')
        .then(response => {
          setMovies(response.data);
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }
    
    getMovies();
  }, []);
  
  return (
    
    <div className="movie-list">
      {movies.map(movie => (
        <Link to={`/movies/${movie.id}`} key={movie.metascore}>
        <MovieCard key={movie.id} movie={movie} />
        </Link>
      ))}
        
    </div>
  
  );
}



export default MovieList;
