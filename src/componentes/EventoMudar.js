import React, { useState } from 'react';

function EventoMudar() {
  const [TextoDigitado, setTexto] = useState('');

  const handleChange = (texto) => {
    setTexto(texto.target.value);
  };

  return (
    <div>
      <input type="text" value={TextoDigitado} onChange={handleChange} placeholder="Digita aqui" />
      <p>Texto: {TextoDigitado}</p>
    </div>
  );
}

export default EventoMudar;
