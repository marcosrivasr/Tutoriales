import React, {useState} from 'react';
import './App.css';

function App() {

  const [count, setCount] = useState(0);

  function handleClick(){
    setCount(count + 1);
  }

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={handleClick}>
          Das dado {count} clicks!
        </button>
      </header>
    </div>
  );
}

export default App;
