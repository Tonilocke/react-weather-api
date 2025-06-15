import { useState } from 'react';
import reactLogo from './assets/react.svg';
import Form from './components/Form';
import Temperature from './components/Temperature';
function App() {
  const [temp, setTemp] = useState(null);
  return (
    <main>
      <h2>Meteo Check</h2>
      <Form  setTemp = { setTemp } />
      {temp != null ? <Temperature temp = { temp }/> : null}
    </main>
  )
}

export default App
