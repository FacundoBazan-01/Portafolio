import React from "react";
import "../styles/Main.css"

const Main = ({nombre, apellido, edad, img, email, info, telefono, localidad}) => {
  return (
    <div className="card">
      <img
        src={img}
        alt="Tu foto"
        className="img"
      />
      <div className="name"> Nombre: {nombre} {apellido} </div>
      <div className="title"> {info} </div>
      <div className="info">
        📧 {email} <br />
        🌍 {localidad}
      </div>
    </div>
  );
};

export default Main;
