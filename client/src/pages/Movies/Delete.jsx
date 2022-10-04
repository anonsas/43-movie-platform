import React, { useContext } from 'react';
import MovieContext from '../../contexts/MovieContext';

function Delete() {
  const { deleteMovieModal, setDeleteMovieModal, setDeleteMovie } =
    useContext(MovieContext);

  const deleteMovieHandler = () => {
    setDeleteMovie(deleteMovieModal);
    setDeleteMovieModal(null);
  };

  if (deleteMovieModal === null) return;

  return (
    <div className="overlay">
      <div className="modal">
        <h5>Are you sure?</h5>
        <div className="modal__actions">
          <button type="button" onClick={deleteMovieHandler}>
            I'm sure
          </button>
          <button type="button" onClick={() => setDeleteMovieModal(null)}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default Delete;
