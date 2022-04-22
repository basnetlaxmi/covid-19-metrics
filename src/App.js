import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Header from './components/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import World from './components/World/World';
import Continents from './components/Continents/Continents';
import { fetchContitnents } from './Redux/Continents/Continents';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContitnents());
  }, []);
  return (
    <div>
      <Header />
      <World />
      <Continents />
    </div>
  );
}

export default App;
