import React from 'react';
import './App.css';

class Nombre extends React.Component {

  constructor(props){
    super(props);
    this.state = {name: ''};
  }

  handleChange = (e) =>{
    this.setState( {name: e.target.value} );
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <h2>Hola {this.state.name}</h2>
          <input 
            placeholder="tu nombre" 
            onChange={this.handleChange} 
            value={this.state.name}  />
        </header>
      </div>
    );
  }
  
}

export default Nombre;
