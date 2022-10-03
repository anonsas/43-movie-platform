import React, { useContext } from 'react';
import CategoryContext from '../../contexts/CategoryContext';

function Delete() {
  const { setDeleteCategory, deleteCategoryModal, setDeleteCategoryModal } =
    useContext(CategoryContext);

  const deleteCategoryHandler = () => {
    setDeleteCategory(deleteCategoryModal);
    setDeleteCategoryModal(null);
  };

  if (deleteCategoryModal === null) return;

  return (
    <div className="overlay">
      <div className="modal">
        <h5>Are you sure?</h5>
        <div className="modal__actions">
          <button type="button" onClick={deleteCategoryHandler}>
            I'm sure
          </button>
          <button type="button" onClick={() => setDeleteCategoryModal(null)}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default Delete;
