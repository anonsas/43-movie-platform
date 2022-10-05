import React, { useState, useEffect, useContext } from 'react';
import MovieContext from '../../contexts/MovieContext';

function Edit() {
  const { editMovieModal, setEditMovieModal, setEditMovie, categoryList } =
    useContext(MovieContext);

  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [categoryID, setCategoryID] = useState(0);

  const editModalSubmitHandler = (e) => {
    e.preventDefault();
    if (!title || !price || !categoryID) return alert('Please fill the blanks!');
    setEditMovie({
      title,
      price: parseFloat(price),
      categoryID: parseInt(categoryID),
      id: editMovieModal.id,
    });
    setEditMovieModal(null);
  };

  useEffect(() => {
    if (editMovieModal === null) return;
    setTitle(editMovieModal.title);
    setPrice(editMovieModal.price);
    setCategoryID(editMovieModal.category_id);
  }, [editMovieModal]);

  if (editMovieModal === null) return;

  return (
    <div className="overlay">
      <form className="modal">
        <h2>Edit Movie:</h2>
        <div className="modal__question">
          <label htmlFor="category">Movie title:</label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>

        <div className="modal__question">
          <label htmlFor="category">Movie price:</label>
          <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} />
        </div>

        <div className="modal__question">
          <label htmlFor="category">Movie Category:</label>
          <select
            name="category"
            value={categoryID}
            onChange={(e) => setCategoryID(e.target.value)}
          >
            <option value={0} disabled>
              Category List
            </option>
            {categoryList?.map((cat) => (
              <option key={cat.id} value={cat.id}>
                {cat.title}
              </option>
            ))}
          </select>
        </div>

        <div className="modal__actions">
          <button type="submit" onClick={editModalSubmitHandler}>
            Submit
          </button>
          <button type="button" onClick={() => setEditMovieModal(null)}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default Edit;
