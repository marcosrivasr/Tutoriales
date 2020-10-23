import React, {useState} from 'react';
import './App.css';

function Nombre() {

  const [name, setName] = useState('');

  function handleChange(e){
    setName(e.target.value);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h2>Hola {name}</h2>
        <input 
          placeholder="tu nombre" 
          onChange={handleChange} 
          value={name}  />
      </header>
    </div>
  );
}

export default Nombre;
