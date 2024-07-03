import React from "react";

function loading() {
  return (
    <div id="loading-screen">
      <div className="loaderContainer">
        <div className="loader"></div>
        <div>Cargando...</div>
      </div>
    </div>
  );
}

export default loading;
