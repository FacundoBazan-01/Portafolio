import React from 'react'


const Header = ({nombre, apellido}) => {
  return (
    <div >
      <h1>Portafolio {nombre} {apellido} </h1>
      <hr />
    </div>
  )
}

export default Header
