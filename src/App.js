import { useState } from 'react';

import './App.css';

import Wheel from './components/Wheel/Wheel'
import LabelList from './components/LabelList/LabelList'
import Monitor from './components/Monitor/Monitor';

function App() {
  const [labels, setLabels] = useState( Array.apply(null, Array(12)).map((item, i) => `כותרת ${i + 1}`) )

  return (
    <div className="App">
      <Monitor></Monitor>
      <Wheel labels={labels}></Wheel>
      <LabelList labels={labels} setLabels={setLabels}></LabelList>
    </div>
  );
}
export default App;
