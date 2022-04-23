import world from '../../images/world.png';

const World = () => (
  <div>
    <div>
      <div className="d-flex align-items-end single-continent justify-content-center p-3">
        <img src={world} alt={world} className="world-img" />
        <div className="d-flex flex-column ms-2 text-white">
          <h2 className="">The World</h2>
          <p className="text-end">
            7231690 deaths
          </p>
        </div>
      </div>
    </div>
  </div>
);
export default World;
