import React from 'react'
import { Link, NavLink } from 'react-router-dom'
const Inicio = () => {
  return (
    <div className='home'>
      <h1>Hola, soy <strong> Cristian lair </strong> soy desarrollador de software y ofrezco servicios como <strong>backend o fullstack</strong>
      </h1>

      <h2>Te ayudo a crear tu sitio web o aplicacion, tener mas visibilidad y relevancia. 
      </h2>
        <br/>
      <Link to='/contacto' className='inicio-enlace'> 
       Contacta conmigo 
      </Link>

      <section className='inicio-section'>
        <h2 className='heading'>
          Proyectos
        </h2>
        <br/>
        <div className='works'>
        <Link to='/portfolio' className='inicio-enlace'> Mis trabajos</Link>
        </div>
      </section>
    </div>
  )
}

export default Inicio
