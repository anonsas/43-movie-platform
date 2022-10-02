import React, { useState, useEffect } from 'react';
import './Categories.scss';
import CategoryContext from '../../contexts/CategoryContext';
import axios from 'axios';
import Create from './Create';

function Categories() {
  const [lastUpdate, setLastUpdate] = useState(Date.now());
  const [categoryList, setCategoryList] = useState(null);
  const [createCategory, setCreateCategory] = useState(null);

  useEffect(() => {
    if (categoryList === null) return;
    // axios
    //   .get('http://localhost:4000/categories')
    //   .then((response) => {
    //     setCategoryList(response.data);
    //   })
    //   .catch((error) => alert(error.message));
  }, [categoryList, lastUpdate]);

  useEffect(() => {
    if (createCategory === null) return;
    axios
      .post('http://localhost:4000/categories')
      .then((response) => {
        setCreateCategory(null);
        setLastUpdate(Date.now());
      })
      .catch((error) => alert(error.message));
  }, [createCategory]);

  return (
    <CategoryContext.Provider value={{ setCreateCategory }}>
      <Create />
    </CategoryContext.Provider>
  );
}

export default Categories;
