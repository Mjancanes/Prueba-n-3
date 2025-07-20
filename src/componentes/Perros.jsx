import React from 'react';

function Perros({ formData, handleChange }) {
  return (
    <fieldset className="fieldset">
      <legend className="legend">🐶 Datos Específicos del Perro</legend>
      <div className="input-group">
        <label>Vacunas</label>
        <div className="checkbox-group">
          <input type="checkbox" name="vacunaRabia" id="vacunaRabia" checked={formData.vacunaRabia} onChange={handleChange} />
          <label htmlFor="vacunaRabia">Rabia</label>
        </div>
        <div className="checkbox-group">
          <input type="checkbox" name="vacunaParvovirus" id="vacunaParvovirus" checked={formData.vacunaParvovirus} onChange={handleChange} />
          <label htmlFor="vacunaParvovirus">Parvovirus</label>
        </div>
        <div className="checkbox-group">
          <input type="checkbox" name="vacunaMoquillo" id="vacunaMoquillo" checked={formData.vacunaMoquillo} onChange={handleChange} />
          <label htmlFor="vacunaMoquillo">Moquillo</label>
        </div>
      </div>
      <div className="input-group">
        <label htmlFor="raza">Raza</label>
        <input type="text" name="raza" id="raza" value={formData.raza} onChange={handleChange} />
      </div>
      <div className="input-group">
        <label htmlFor="esterilizado">¿Está esterilizado?</label>
        <select name="esterilizado" id="esterilizado" value={formData.esterilizado} onChange={handleChange}>
          <option value="si">Sí</option>
          <option value="no">No</option>
          <option value="no-sabe">No lo sé</option>
        </select>
      </div>
    </fieldset>
  );
}

export default Perros;