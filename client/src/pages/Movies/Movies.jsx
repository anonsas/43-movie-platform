import React, { useState, useEffect } from 'react';
import './Movies.scss';
import MovieContext from '../../contexts/MovieContext';
import Create from './Create';
import List from './List';
import Delete from './Delete';
import Edit from './Edit';
import axios from 'axios';

function Movies() {
  const [lastUpdate, setLastUpdate] = useState(Date.now());
  const [movieList, setMovieList] = useState(null);
  const [createMovie, setCreateMovie] = useState(null);

  const [editMovie, setEditMovie] = useState(null);
  const [editMovieModal, setEditMovieModal] = useState(null);

  const [deleteMovie, setDeleteMovie] = useState(null);
  const [deleteMovieModal, setDeleteMovieModal] = useState(null);

  const [categoryList, setCategoryList] = useState(null);

  useEffect(() => {
    axios
      .get('http://localhost:4000/categories')
      .then((response) => {
        setCategoryList(response.data);
      })
      .catch((error) => alert(error.message));
  }, []);

  //============================================
  // MOVIE CRUD
  useEffect(() => {
    axios
      .get('http://localhost:4000/movies')
      .then((response) => {
        setMovieList(response.data);
      })
      .catch((error) => alert(error.message));
  }, [lastUpdate]);

  useEffect(() => {
    if (createMovie === null) return;
    axios
      .post('http://localhost:4000/movies', createMovie)
      .then((response) => {
        setLastUpdate(Date.now());
        setCreateMovie(null);
      })
      .catch((error) => alert(error.message));
  }, [createMovie]);

  useEffect(() => {
    if (editMovie === null) return;
    axios
      .put(`http://localhost:4000/movies/${editMovie.id}`, editMovie)
      .then((response) => {
        setLastUpdate(Date.now());
        setEditMovie(null);
      })
      .catch((error) => alert(error.message));
  }, [editMovie]);

  useEffect(() => {
    if (deleteMovie === null) return;
    axios
      .delete(`http://localhost:4000/movies/${deleteMovie.id}`)
      .then((response) => {
        setLastUpdate(Date.now());
        setDeleteMovie(null);
      })
      .catch((error) => alert(error.message));
  }, [deleteMovie]);

  return (
    <MovieContext.Provider
      value={{
        movieList,
        setCreateMovie,
        setEditMovie,
        editMovieModal,
        setEditMovieModal,
        setDeleteMovie,
        deleteMovieModal,
        setDeleteMovieModal,
        categoryList,
      }}
    >
      <Create />
      <List />
      <Delete />
      <Edit />
    </MovieContext.Provider>
  );
}

export default Movies;
