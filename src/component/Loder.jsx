import "./loder.css";

const Loader = () => {
  return (
    <div className="loader-container">
      <div className="pulsating-circle"></div>
      <div className="rotating-cube">
        <div className="cube-face cube-front"></div>
        <div className="cube-face cube-back"></div>
        <div className="cube-face cube-left"></div>
        <div className="cube-face cube-right"></div>
        <div className="cube-face cube-top"></div>
        <div className="cube-face cube-bottom"></div>
      </div>
    </div>
  );
};

export default Loader;
