import React from "react";
import "../styles/Main.css"

const Main = ({nombre, apellido, edad, img, email, ocupacion, telefono, localidad}) => {
  return (
    <div className="card">
      <img
        src={img}
        alt="Tu foto"
        className="avatar"
      />
      <div className="name"> Nombre: {nombre} {apellido} </div>
      <div className="title">Ocupacion: {ocupacion} </div>
      <div className="info">
        📧 {email} <br />
        📱 {telefono} <br />
        🌍 {localidad}
      </div>
    </div>
  );
};

export default Main;
