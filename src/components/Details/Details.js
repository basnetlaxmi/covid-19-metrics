import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import './Details.css';
import { BsArrowRightCircle } from 'react-icons/bs';
import Africa from '../../images/Africa.png';
import Asia from '../../images/Asia.png';
import Europe from '../../images/Europe.png';
import Australia from '../../images/Australia-Oceania.png';
import NorthAmerica from '../../images/NorthAmerica.png';
import SouthAmerica from '../../images/SouthAmerica.png';

const Details = () => {
  const params = useParams();
  const continentName = params.name;
  const continentData = useSelector((state) => state.continentReducer.continents);
  const deathDataContinent = continentData.filter((continent) => continent.name === continentName);
  const countriesData = useSelector((state) => state.countryReducer.countries);
  const filterCountries = countriesData.filter((country) => country.continent === continentName);
  const continentsShape = [Africa, Asia, Europe, Australia, NorthAmerica, SouthAmerica];
  const imageName = continentName.replace(/ /g, '');
  const imgSrc = continentsShape.filter((shape) => shape.includes(imageName) === true);
  return (
    <div>
      <div>
        <div className="d-flex align-items-end single-continent justify-content-center p-3">
          <img src={imgSrc[0]} alt={continentName} className="continent-img" />
          <div className="d-flex flex-column ms-2 text-white">
            <h2 className="">{continentName}</h2>
            <p className="text-end">
              {' '}
              {`${deathDataContinent[0].deaths} `}
              deaths
            </p>
          </div>
        </div>
      </div>
      <div className="country-header text-white">
        <h6 className="">Stats By Country</h6>
      </div>
      <ul className="country-list">
        {filterCountries.map((country) => (
          <div key={country.name} className="d-flex justify-content-around py-5 text-left">
            <li>{country.name}</li>
            <p>
              {country.deaths}
              {' '}
              deaths
            </p>
            <BsArrowRightCircle />
          </div>
        ))}
      </ul>
    </div>
  );
};
export default Details;
