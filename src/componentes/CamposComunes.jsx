import React from 'react';

function CamposComunes({ formData, handleChange }) {
  return (
    <>
      <div className="input-group">
        <label htmlFor="nombreTutor">Nombre del Tutor</label>
        <input type="text" name="nombreTutor" id="nombreTutor" 
        value={formData.nombreTutor} 
        onChange={handleChange} 
        required />
      </div>
      <div className="input-group">
        <label htmlFor="direccion">Dirección</label>
              <input type="text" name="direccion" id="direccion" 
              value={formData.direccion} 
              onChange={handleChange} 
              required />
      </div>
      <div className="input-group">
        <label htmlFor="numeroTelefono">Telefono</label>
          <input
            type="text"
            name="numeroTelefono"
            id="numeroTelefono"
            value={formData.numeroTelefono}
            onChange={(e) => {
              const valor = e.target.value;
              const regex = /^[0-9!@#$%^&*()_+\-=]{0,11}$/;
              if (regex.test(valor) || valor === "") {
                handleChange(e);
              }
            }}
            placeholder="Ejemplo: +56912345678"
            required
          />
      </div>
      <div className="input-group">
        <label htmlFor="nombreMascota">Nombre de la Mascota</label>
        <input type="text" name="nombreMascota" id="nombreMascota" 
        value={formData.nombreMascota} 
        onChange={handleChange} 
        required />
      </div>
      <div className="input-group">
        <label htmlFor="edad">Edad (años)</label>
        <input type="number" name="edad" id="edad" 
        value={formData.edad} 
        onChange={handleChange} />
      </div>
      <div className="input-group">
        <label htmlFor="peso">Peso (kg)</label>
        <input type="number" step="0.1" name="peso" id="peso" 
        value={formData.peso} 
        onChange={handleChange} />
      </div>
    </>
  );
}

export default CamposComunes;