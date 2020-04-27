import React from 'react';
import './App.css';

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {count: 0};
  }

  handleClick = () =>{
    this.setState( {count: this.state.count + 1} );
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <button onClick={this.handleClick}>
            Das dado {this.state.count} clicks!
          </button>
        </header>
      </div>
    );
  }
  
}

export default App;
