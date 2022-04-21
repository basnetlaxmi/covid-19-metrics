import world from '../../images/world.png';
import './World.css';

const World = () => (
  <div>
    <div className="d-flex align-center world-container">
      <img src={world} alt="World map" className="m-auto" />
      <p className="">Hello World</p>
    </div>
  </div>
);
export default World;
