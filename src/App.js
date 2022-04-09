import { useState } from 'react';

import './App.css';

import Wheel from './components/Wheel/Wheel'
import LabelList from './components/LabelList/LabelList'

function App() {
  const [labels, setLabels] = useState( Array.apply(null, Array(12)).map((item, i) => `כותרת ${i + 1}`) )

  return (
    <div className="App">
      <LabelList labels={labels} setLabels={setLabels}></LabelList>
      <Wheel labels={labels}></Wheel>
    </div>
  );
}
export default App;
