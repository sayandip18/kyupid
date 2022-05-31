import React, {useState} from 'react';
import KyupidMap from './components/Map/Map';

import ToggleBoard from './components/ToggleBoard/ToggleBoard';
import './App.css';

function App() {
  const [type, setType] = useState("general");

  return (
    <div className="container">
      <ToggleBoard type={type} setType={setType}/>
      <KyupidMap type={type} />
    </div>
  );
}

export default App;
