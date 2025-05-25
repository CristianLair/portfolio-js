import React from 'react'

const Curriculum = () => {
  const primerDia = new Date("2022/08/01");
  const hoy = new Date();
  let años = hoy.getFullYear() - primerDia.getFullYear();
  let meses = hoy.getMonth() - primerDia.getMonth();
  if (meses < 0) {
    años--;
    meses += 12;
  }
  return (
    <div className='page'>
    <h1 className='heading'>Curriculum</h1>
    <section className='services'> 
    <h2>Experiencia</h2>
    <ul className='ul-services'>
      <li>
      Mas de <strong>{años} años</strong> y <strong>  {meses} meses</strong> en LIGO como Backend
      </li>
    </ul>     
      <h2>Conocimientos</h2>
    <ul className='ul-services'>
      <li>
      Google Cloud Platafotrm
      </li>
      <li>
      NodeJS
      </li>
      <li>
      JavaScript
      </li>
      <li>
      TypeScript
      </li>
      <li>
      MongoDB
      </li>
      <li>
      MySQL
      </li>

    </ul>

      <h2>Educacion</h2>
      <ul className='ul-services'>
        <li>
        Diplomatura en desarrollo web full stack e-Learning UTN
        </li>

        <li>
          Argentina programa
        </li>

        <li>
          Bootcamp Soy Henry
        </li>
      </ul>
    <h2>Proyectos personales</h2>
    <ul className='ul-services'>
      <li>
      Pokemons
      </li>

      <li>
      Countries
      </li>
    </ul>
    </section>
    <div style={{ marginTop: '40px' }}>
  <a
  className='input-button-contact'
  href='https://drive.google.com/uc?export=download&id=1Z9lCfz_P6Ayzvreg1tNmCMSnOTcfueY-'
  target='_blank'
  rel='noopener noreferrer'>
  Descargar CV
</a>
</div>
  </div>
  )
}

export default Curriculum
