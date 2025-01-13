import React, { useState } from 'react';

function Contacto() {
  const [formulario, setFormulario] = useState({
    nombre: '',
    email: '',
    mensaje: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormulario((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Mensaje enviado: ' + JSON.stringify(formulario));
  };

  return (
    <div className="contacto">
      <h2>Contacto</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Nombre:</label>
          <input
            type="text"
            name="nombre"
            placeholder="Nombre"
            value={formulario.nombre}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formulario.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Mensaje:</label>
          <textarea
            name="mensaje"
            placeholder="Tu mensaje"
            value={formulario.mensaje}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default Contacto;
