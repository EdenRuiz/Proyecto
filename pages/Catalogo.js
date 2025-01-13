import React, { useState } from 'react';

function Catalogo() {
  const [productos] = useState([
    { id: 1, nombre: 'Pollo', proteina: '31g por 100g' },
    { id: 2, nombre: 'Pescado', proteina: '22g por 100g' },
    { id: 3, nombre: 'Tofu', proteina: '8g por 100g' }
  ]);

  return (
    <div className="catalogo">
      <h2>Catálogo de Alimentos Proteicos</h2>
      {productos.map(producto => (
        <div key={producto.id} className="producto">
          <h3>{producto.nombre}</h3>
          <p>Proteína: {producto.proteina}</p>
        </div>
      ))}
    </div>
  );
}

export default Catalogo;
