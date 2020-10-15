import React from 'react';
import Side from './components/Side';
import Card from './components/Card';


import './App.css';

function App() {
  return (
    <div className="App">
      <div className="box">
        <Side id="side-1" className="side">
          <Card id="card-1" className="card" draggable="true">
            <p>Heading</p>
          </Card>
          <Card id="card-1" className="card" draggable="true">
            <p>Heading 2</p>
          </Card>
          <Card id="card-1" className="card" draggable="true">
            <p>PARA</p>
          </Card>
        </Side>

        <Side id="side-2" className="side">
          <Card id="card-2" className="card" draggable="true">
            
          </Card>
        </Side>
        
      </div>
    </div>
  );
}

export default App;
