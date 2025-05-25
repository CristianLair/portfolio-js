import React from 'react'

const Servicios = () => {
  return (
    <div className='page'>
      <h1 className='heading'>Servicios</h1>
      <section className='services'> 
        <article className='service'>
        <h2>Diseño web</h2>
        <p>Estilos a tu web</p>      
        </article>

        <article className='service'>
        <h2>Backend</h2>
        <p>Mantenimiento y creación de nuevas funcionalidades</p>      
        </article>

        <article className='service'>
        <h2>Mentoria</h2>
        <p>Seguimiento constante y acompañamiento</p>      
        </article>
      </section>
    </div>
  )
}

export default Servicios
