import React from "react";

const Botones = () => {
  return (
    <div className="contenedor-botones">
      <button className="back">
        <i className="fa-solid fa-backward-step"></i>
      </button>
      <button className="play">
        <i className="fa-sharp-duotone fa-solid fa-play"></i>
      </button>
      <button className="pause">
        <i className="fa-solid fa-pause"></i>
      </button>
      <button className="forward">
        <i className="fa-solid fa-forward-step"></i>
      </button>
    </div>
  );
};
export default Botones;
