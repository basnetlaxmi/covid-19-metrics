import './Continent.css';
import { useSelector } from 'react-redux';
// import Continent from './Continent';

const Continents = () => {
  const continents = useSelector((state) => state.continentReducer.continents);
  console.log(continents);

  return (

    <div>
      <div className="continent-header text-white">
        <h6 className="m-auto">Stats By Continent</h6>
      </div>
      <div className="row">
        {continents.map((continent) => (
          <div className="col-6" key={continent.name}>
            {continent.name}
          </div>
        ))}
        ;

      </div>
    </div>
  );
};
export default Continents;
