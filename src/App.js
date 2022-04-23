import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Header from './components/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import Continents from './components/Continents/Continents';
import Details from './components/Details/Details';

function App() {
  const [continent, setContinent] = useState('');
  return (
    <div>
      <Header setContinent={setContinent} />
      <Routes>
        <Route path="/" element={<Continents singleContinent={continent} />} />
        <Route path="/details/:name" element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;
