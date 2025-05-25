import React, { useRef } from 'react'
import emailjs from 'emailjs-com'

const Contacto = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    const formData = new FormData(form.current);
    formData.append('time', new Date().toLocaleString())

    emailjs.sendForm(process.env.REACT_APP_SERVICE_ID , process.env.REACT_APP_TEMPLATE_ID, form.current, process.env.REACT_APP_PUBLIC_KEY)
      .then((result) => {
          console.log('Correo enviado:', result.text)
          alert("Mensaje enviado con éxito")
          form.current.reset()
      }, (error) => {
          console.error('Error al enviar:', error.text)
          alert("Error al enviar el mensaje")
      });
  };

  return (
    <div className='page'>
      <h1 className='heading'>Contacto</h1>
      <form ref={form} className='contact' onSubmit={sendEmail}>
        <input type='text' name='name' placeholder='Nombre' required />
        <input type='text' name='apellido' placeholder='Apellido' required />
        <input type='email' name='email' placeholder='Email' required />
        <textarea name='message' placeholder='Motivo de contacto' required />
        <input className='input-button-contact' type='submit' value='Enviar'/>
      </form>
    </div>
  );
};


export default Contacto
