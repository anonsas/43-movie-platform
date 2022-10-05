import React, { useContext } from 'react';
import MovieContext from '../../contexts/MovieContext';
import NoImage from '../../assets/NoImage.jpeg';

function Line({ movie }) {
  const { setEditMovieModal, setDeleteMovieModal, categoryList } =
    useContext(MovieContext);

  return (
    <div className="line">
      <div className="line__content">
        {movie.image ? (
          <img src={movie.image} alt={movie.title} className="line__image" />
        ) : (
          <img src={NoImage} alt={movie.title} className="line__image" />
        )}
        <p>Title: {movie.title}</p>
        <p>Price: {movie.price} &euro;</p>
        <p>Rating: {movie.rating ?? 'No Rating'}</p>
        <p>
          Category:
          {categoryList.find((category) => category.id === movie.category_id).title}
        </p>
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
