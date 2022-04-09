import { useState } from 'react';

import './App.css';

import Wheel from './components/Wheel/Wheel'
import LabelList from './components/LabelList/LabelList'

function App() {
  const [labels, setLabels] = useState(['abc', 'def', 'ghi'])

  function setLabel (i, newLabel) {
    const newLabels = [...labels]
    newLabels[i] = newLabel
    setLabels(newLabels)
  }

  return (
    <div className="App">
      <Wheel labels={labels}></Wheel>
      <LabelList labels={labels} setLabel={setLabel}></LabelList>
    </div>
  );
}
export default App;
