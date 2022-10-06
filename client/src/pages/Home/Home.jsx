import React, { useState, useEffect } from 'react';
import HomeContext from '../../contexts/HomeContext';
import './Home.scss';
import List from './List';

function Home() {
  return (
    <HomeContext.Provider value={{}}>
      <List />
    </HomeContext.Provider>
  );
}

export default Home;
