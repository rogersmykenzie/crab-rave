import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [crab, setCrab] = useState('');
  const [crabs, setCrabs] = useState([]);

  useEffect(() => {
    axios.get('/api/crabs').then(({ data }) => setCrabs(data));
  }, [])

  const handleClick = () => {
    axios.post('/api/crabs', { crab }).then(({ data }) => setCrabs(data))
  }

  return (
    <div className="App">
      <iframe width="100%" height="100%" src="https://www.youtube.com/embed/LDU_Txk06tM?start=66&autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

      <div className="fixedContainer">
        <input placeholder="Enter Crab" onChange={e => setCrab(e.target.value)} />
        <button onClick={handleClick}>Add Crab</button>
      </div>
      <ul>
        {crabs.map(crab => <img src={crab} style={{animation: `dance 3s linear ${Math.random() * 4}s forwards infinite `}} />)}
      </ul> 

    </div>
  );
}

export default App;
