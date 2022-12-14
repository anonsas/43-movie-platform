import React, { useState, useEffect } from 'react';
import HomeContext from '../../contexts/HomeContext';
import './Home.scss';
import List from './List';
import CategoryFilter from './CategoryFilter';
import axios from 'axios';

function Home() {
  const [lastUpdate, setLastUpdate] = useState(Date.now());
  const [movieList, setMovieList] = useState(null);
  const [ratingData, setRatingData] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('all');

  console.log(movieList);

  useEffect(() => {
    axios
      .get('http://localhost:4000/')
      .then((response) => {
        setMovieList(response.data.map((movie) => ({ ...movie, row: movie.id })));
      })
      .catch((error) => alert(error.message));
  }, [lastUpdate]);

  useEffect(() => {
    if (ratingData === null) return;
    axios
      .put(`http://localhost:4000/${ratingData.id}`, ratingData)
      .then((response) => {
        setLastUpdate(Date.now());
      })
      .catch((error) => alert(error.message));
  }, [ratingData]);

  return (
    <HomeContext.Provider
      value={{
        movieList,
        setMovieList,
        setRatingData,
        selectedCategory,
        setSelectedCategory,
      }}
    >
      <CategoryFilter />
      <List />
    </HomeContext.Provider>
  );
}

export default Home;
