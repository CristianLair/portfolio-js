import React from 'react'
import { Link } from 'react-router-dom'
import { trabajos } from '../data/trabajos'

const Portafolio = () => {
  return (
    <div className='page'>
      <h1 className='heading'>Portafolio</h1>
      {
        trabajos.map(trabajo => {
          return (
          <article key={trabajo.id}>
            <h2>
              {trabajo.nombre}
            </h2>
            <span> <strong>{trabajo.rol}</strong></span>

            <h3>
              {trabajo.tecnologias}
            </h3>
            <h3>
              {trabajo.descripcion}
            </h3>
            {trabajo.url ? <Link to= {trabajo.url} className= 'link-portfolio'> Repositorio </Link> : <Link className= 'link-portfolio'> Repositorio privado</Link> }
          </article>
          )
        })
      }
    </div>
  )
}

export default Portafolio
