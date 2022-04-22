import './Continent.css';
import { useSelector } from 'react-redux';

const Continents = () => {
  const continents = useSelector((state) => state.continentReducer.continents);
  console.log(continents);

  return (

    <div>
      <div className="continent-header text-white">
        <h6 className="m-auto">Stats By Continent</h6>
      </div>
      <div className="row">
        <div className="col" />
      </div>
    </div>
  );
};
export default Continents;
