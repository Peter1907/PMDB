import NavBar from './components/Navbar/NavBar';
import TopMovies from './pages/TopMovies';
import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';
import TopSeries from './pages/TopSeries';
import PopMovies from './pages/PopMovies';
import PopSeries from './pages/PopSeries';
import ItemDetails from './pages/ItemDetails/ItemDetails';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/top-movies" element={<TopMovies />} />
        <Route path="/top-series" element={<TopSeries />} />
        <Route path="/pop-movies" element={<PopMovies />} />
        <Route path="/pop-series" element={<PopSeries />} />
        <Route path="/item-details/:id" element={<ItemDetails />} />
      </Routes>
    </div>
  );
}

export default App;
