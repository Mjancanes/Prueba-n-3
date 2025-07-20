import React from 'react';

function Gatos({ formData, handleChange }) {
  return (
    <fieldset className="fieldset">
      <legend className="legend">🐱 Datos Específicos del Gato</legend>
      <div className="input-group">
        <label>Vacunas</label>
        <div className="checkbox-group">
          <input type="checkbox" name="vacunaTrivalente" id="vacunaTrivalente" checked={formData.vacunaTrivalente} onChange={handleChange} />
          <label htmlFor="vacunaTrivalente">Trivalente Felina</label>
        </div>
        <div className="checkbox-group">
          <input type="checkbox" name="vacunaLeucemia" id="vacunaLeucemia" checked={formData.vacunaLeucemia} onChange={handleChange} />
          <label htmlFor="vacunaLeucemia">Leucemia Felina</label>
        </div>
      </div>
      <div className="input-group">
        <label htmlFor="pruebaVifVelof">Prueba VIF/VeLeF</label>
        <select name="pruebaVifVelof" id="pruebaVifVelof" value={formData.pruebaVifVelof} onChange={handleChange}>
          <option value="no-realizado">No realizado</option>
          <option value="negativo">Negativo</option>
          <option value="positivo">Positivo</option>
        </select>
      </div>
      <div className="input-group">
        <label htmlFor="esIndoor">¿Es un gato de interior?</label>
        <select name="esIndoor" id="esIndoor" value={formData.esIndoor} onChange={handleChange}>
          <option value="si">Sí, solo interior</option>
          <option value="no">No, tiene acceso al exterior</option>
        </select>
      </div>
    </fieldset>
  );
}

export default Gatos;