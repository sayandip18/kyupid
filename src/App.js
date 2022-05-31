import React, {useState} from 'react';
import KyupidMap from './components/Map/Map';

function App() {
  const [type, setType] = useState("general");

  return (
    <div>
      <KyupidMap type={type} />
    </div>
  );
}

export default App;
