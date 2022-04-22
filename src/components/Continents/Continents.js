import './Continent.css';
import { useSelector } from 'react-redux';
import { BsArrowRightCircle } from 'react-icons/bs';
import Africa from '../../images/Africa.png';
import Asia from '../../images/Asia.png';
import Europe from '../../images/Europe.png';
import Australia from '../../images/Australia-Oceania.png';
import NorthAmerica from '../../images/NorthAmerica.png';
import SouthAmerica from '../../images/SouthAmerica.png';

const Continents = () => {
  const continents = useSelector((state) => state.continentReducer.continents);
  const continentsShape = [Africa, Asia, Europe, Australia, NorthAmerica, SouthAmerica];

  return (

    <div>
      <div className="continent-header text-white">
        <h6 className="m-auto">Stats By Continent</h6>
      </div>
      <div className="row">
        {continents.map((continent) => continentsShape.map((image) => (

          image.search(continent.name.replace(/ /g, '')) !== -1
            ? (
              <div className="col-4 map-data p-1" key={continent.name}>
                <div className=" d-flex justify-content-end m-2">
                  <BsArrowRightCircle />
                </div>
                <div className="data-container d-flex flex-column align-items-center mt-5">

                  <div>
                    <img src={image} alt="continent.name" className="img-fluid map-img " />
                  </div>
                  <div className="d-flex flex-column align-items-end mt-3 data-details">
                    <h4>{continent.name}</h4>
                    <p>{continent.deaths}</p>
                  </div>
                </div>
              </div>
            )
            : null
        )))}
      </div>
    </div>
  );
};
export default Continents;
