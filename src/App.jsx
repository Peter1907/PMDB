import { Route, Routes } from 'react-router-dom';
import NavBar from './components/Navbar/NavBar';
import Home from './pages/Home';
import ItemDetails from './pages/ItemDetails/ItemDetails';
import Disclaimer from './components/Disclaimer/Disclaimer';
import RankedList from './pages/RankedList';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/top-movies" element={<RankedList type={'top-movies'} />} />
        <Route path="/top-series" element={<RankedList type={'top-series'} />} />
        <Route path="/pop-movies" element={<RankedList type={'pop-movies'} />} />
        <Route path="/pop-series" element={<RankedList type={'pop-series'} />} />
        <Route path="/item-details/:id" element={<ItemDetails />} />
      </Routes>
      <Disclaimer />
    </div>
  );
}

export default App;
