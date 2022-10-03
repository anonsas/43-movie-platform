import React, { useContext } from 'react';
import CategoryContext from '../../contexts/CategoryContext';

function Line({ category }) {
  const { setDeleteCategoryModal } = useContext(CategoryContext);

  return (
    <div className="line">
      <div className="line__content">
        <p>{category.title}</p>
      </div>

      <div className="line__actions">
        <button type="button" onClick={() => setDeleteCategoryModal(category)}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default Line;
