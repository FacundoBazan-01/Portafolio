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
        info: "Soy un estudiante de programación de la facultad regional Tucumán, estoy en segundo año de la carrera y los lenguajes que mas manejo son JavaScript, Java y un poco de C#.   ",
        localidad: "San Miguel de Tucumán"

    }
  return (
    <div>
      <Header {...Alumno}></Header>
      <Main {...Alumno} ></Main>
      <Footer></Footer>
    </div>
  )
}

export default Home
