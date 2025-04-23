import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Main from './Main'
import "../styles/Home.css"
import reactLogo from '../assets/IMG-20240920-WA0062.jpg'

const Home = () => {
    const Alumno = {
        nombre: "Facundo",
        apellido: "Bazan",
        edad: 26,
        img: `${reactLogo}`,
        email: "Facubazan992009@gmail.com",
        ocupacion: "Estudiante de programación de la facultad regional Tucumán ",
        telefono: 3816281616,
        localidad: "San Miguel de Tucumán"

    }
  return (
    <div>
      <Header></Header>
      <Main {...Alumno} ></Main>
      <Footer></Footer>
    </div>
  )
}

export default Home
