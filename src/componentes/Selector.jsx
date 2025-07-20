import React from 'react';
import imgPerro from '../assets/perro.png';
import imgGato from '../assets/gato.png';

function Selector({ tipoMascota, onTipoChange }) {
  return (
    <div className="selection-container">
      <p>Por favor, selecciona el tipo de mascota:</p>
      <div className="button-group">
        <button 
          className={`selection-button ${tipoMascota === 'perro' ? 'selected' : ''}`}
          onClick={() => onTipoChange('perro')}
        >
          <img src={imgPerro} alt="Perro" className="button-image" />
          Perro
        </button>
        <button 
          className={`selection-button ${tipoMascota === 'gato' ? 'selected' : ''}`}
          onClick={() => onTipoChange('gato')}
        >
          <img src={imgGato} alt="Gato" className="button-image" />
          Gato
        </button>
      </div>
    </div>
  );
}

export default Selector;