import './Continent.css';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { BsArrowRightCircle } from 'react-icons/bs';
import World from '../World/World';
import Africa from '../../images/Africa.png';
import Asia from '../../images/Asia.png';
import Europe from '../../images/Europe.png';
import Australia from '../../images/Australia-Oceania.png';
import NorthAmerica from '../../images/NorthAmerica.png';
import SouthAmerica from '../../images/SouthAmerica.png';

const Continents = ({ singleContinent }) => {
  const continents = useSelector((state) => state.continentReducer.continents);
  const selectedContinent = continents.filter((continent) => continent.name === singleContinent);
  const continentsShape = [Africa, Asia, Europe, Australia, NorthAmerica, SouthAmerica];
  const imageName = singleContinent.replace(/ /g, '');
  const imgSrc = continentsShape.filter((shape) => shape.includes(imageName) === true);
  return (
    <div>
      <World />
      <div className="continent-header text-white">
        <h6 className="m-auto">Stats By Continent</h6>
      </div>
      <div className="row">
        {selectedContinent.length
          ? (
            <div className="col-md-3 col-xl-4  map-data p-1">
              <div className=" d-flex justify-content-end m-2">
                <BsArrowRightCircle />
              </div>
              <div className="data-container d-flex flex-column align-items-center mt-5">

                <div>
                  <Link to={`/details/${selectedContinent[0].name}`}>
                    <img src={imgSrc} alt="continent.name" className="img-fluid map-img " />
                  </Link>
                </div>
                <div className="d-flex flex-column align-items-end mt-3 data-details">
                  <h4>{selectedContinent[0].name}</h4>
                  <p>{selectedContinent[0].deaths}</p>
                </div>
              </div>
            </div>
          )
          : continents.map((continent) => continentsShape.map((image) => (

            image.search(continent.name.replace(/ /g, '')) !== -1
              ? (
                <div className="col-md-3 col-xl-4  map-data p-1" key={continent.name}>
                  <div className=" d-flex justify-content-end m-2">
                    <BsArrowRightCircle />
                  </div>
                  <div className="data-container d-flex flex-column align-items-center mt-5">

                    <div>
                      <Link to={`/details/${continent.name}`}>
                        <img src={image} alt="continent.name" className="img-fluid map-img " />
                      </Link>
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
Continents.propTypes = {
  singleContinent: PropTypes.string.isRequired,
};
export default Continents;
