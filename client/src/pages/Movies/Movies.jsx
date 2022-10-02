import React from 'react';
import './Movies.scss';
import MovieContext from '../../contexts/MovieContext';

function Movies() {
  return (
    <MovieContext.Provider value={{}}>
      <div>Movies</div>
    </MovieContext.Provider>
  );
}

export default Movies;
