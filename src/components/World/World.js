import world from '../../images/world.png';
import './World.css';

const World = () => (
  <div>
    <div className="d-flex align-center world-container p-3">
      <img src={world} alt="World map" className="m-auto" />
      <h6 className="">The World</h6>
      <p> 7231690 deaths</p>
    </div>
  </div>
);
export default World;
