
import { useState } from 'react';
import './App.css'; 
import Selector from './componentes/Selector';
import CamposComunes from './componentes/CamposComunes';
import Perros from './componentes/Perros';
import Gatos from './componentes/Gatos';

const initialState = {
  nombreTutor: '',
  direccion: '',
  nombreMascota: '',
  edad: '',
  peso: '',
  vacunaRabia: false,
  vacunaParvovirus: false,
  vacunaMoquillo: false,
  raza: '',
  esterilizado: 'no',
  vacunaTrivalente: false,
  vacunaLeucemia: false,
  pruebaVifVelof: 'no-realizado',
  esIndoor: 'si',
  numeroTelefono: '', 
};

function App() {
  const [tipoMascota, setTipoMascota] = useState('');
  const [formData, setFormData] = useState(initialState);


  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleTipoChange = (tipo) => {
    setTipoMascota(tipo);
    setFormData(initialState); 
  };
  

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Formulario enviado:", { tipoMascota, ...formData });
    alert(`¡Gracias por registrar a ${formData.nombreMascota}!`);
  };

  return (
    <div className="container">
      <h1 className="title">📝 Formulario de Registro de Pacientes</h1>
      
      <Selector tipoMascota={tipoMascota} onTipoChange={handleTipoChange} />

      {}
      {tipoMascota && (
        <form onSubmit={handleSubmit} className="form-container">
          <CamposComunes formData={formData} handleChange={handleChange} />
        
          {}
          {tipoMascota === 'perro' && <Perros formData={formData} handleChange={handleChange} />}
          {tipoMascota === 'gato' && <Gatos formData={formData} handleChange={handleChange} />}
          
          <button type="submit" className="submit-button">Registrar Mascota</button>
        </form>
      )}
    </div>
  );
}

export default App;
