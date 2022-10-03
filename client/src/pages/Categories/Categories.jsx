import React, { useState, useEffect } from 'react';
import './Categories.scss';
import CategoryContext from '../../contexts/CategoryContext';
import axios from 'axios';
import List from './List';
import Create from './Create';
import Delete from './Delete';

function Categories() {
  const [lastUpdate, setLastUpdate] = useState(Date.now());
  const [categoryList, setCategoryList] = useState(null);
  const [createCategory, setCreateCategory] = useState(null);

  const [deleteCategory, setDeleteCategory] = useState(null);
  const [deleteCategoryModal, setDeleteCategoryModal] = useState(null);

  useEffect(() => {
    axios
      .get('http://localhost:4000/categories')
      .then((response) => {
        setCategoryList(response.data);
      })
      .catch((error) => alert(error.message));
  }, [lastUpdate]);

  useEffect(() => {
    if (createCategory === null) return;
    axios
      .post('http://localhost:4000/categories', createCategory)
      .then((response) => {
        setCreateCategory(null);
        setLastUpdate(Date.now());
      })
      .catch((error) => alert(error.message));
  }, [createCategory]);

  useEffect(() => {
    if (deleteCategory === null) return;
    axios
      .delete(`http://localhost:4000/categories/${deleteCategory.id}`)
      .then((response) => {
        setDeleteCategory(null);
        setLastUpdate(Date.now());
      })
      .catch((error) => alert(error.message));
  }, [deleteCategory]);

  return (
    <CategoryContext.Provider
      value={{
        categoryList,
        setCreateCategory,
        setDeleteCategory,
        deleteCategoryModal,
        setDeleteCategoryModal,
      }}
    >
      <Create />
      <List />
      <Delete />
    </CategoryContext.Provider>
  );
}

export default Categories;
