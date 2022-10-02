import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import { Home, Categories, Movies } from './pages/index';

function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="categories" element={<Categories />} />
        <Route path="movies" element={<Movies />} />
      </Routes>
    </div>
  );
}

export default App;
