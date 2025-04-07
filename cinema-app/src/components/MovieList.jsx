import React from 'react';
import MovieCard from './MovieCard';

const MovieList = ({ movies }) => {
  return (
    <div className="movie-list">
      {movies.map((movie,index) => (
        <MovieCard key={movie.id} {...movie}
        delay={index * 0.15} // передаю затримку як пропс
         />
      ))}
    </div>
  );
};

export default MovieList;