import React, { useContext } from 'react';
import MovieContext from '../../contexts/MovieContext';

function Line({ movie }) {
  const { setEditMovieModal, setDeleteMovieModal, categoryList } =
    useContext(MovieContext);

  return (
    <div className="line">
      <div className="line__content">
        <p>{movie.title}</p>
        <p>{movie.price} &euro;</p>
        <p>{movie.rating ?? 'No Rating'}</p>
        <p>{categoryList.find((category) => category.id === movie.category_id).title}</p>
      </div>

      <div className="line__actions">
        <button type="button" onClick={() => setEditMovieModal(movie)}>
          Edit
        </button>
        <button type="button" onClick={() => setDeleteMovieModal(movie)}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default Line;
