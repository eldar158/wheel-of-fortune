import React from 'react';

import './App.css';

import Wheel from './components/Wheel/Wheel'
import LabelList from './components/LabelList/LabelList'
import Monitor from './components/Monitor/Monitor';

import { getSelectedLabelKey } from './components/Wheel/spin'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      spin: {r: -5, w: 0},
      labels: Array.apply(null, Array(12)).map((item, i) => `כותרת ${i + 1}`)
    }

    this.setLabels = this.setLabels.bind(this)
    this.setSpin = this.setSpin.bind(this)
  }

  setLabels (newLabels, callback) {
    this.setState({labels: newLabels}, () => {
      if (callback && typeof callback === 'function') callback()
    })
  }
  setSpin (newSpin, callback) {
    this.setState({spin: newSpin}, () => {
      if (callback && typeof callback === 'function') callback()
    })
  }

  render() {
    const {spin, labels} = {...this.state}
    const {setSpin, setLabels} = {...this}

    const monitorText = labels[getSelectedLabelKey(12, spin.r)]

    return (
      //whole app in rtl
      <div className="App" dir='rtl'>
        <Monitor text={monitorText}></Monitor>
        <Wheel spin={spin} setSpin={setSpin} labels={labels}></Wheel>
        <LabelList labels={labels} setLabels={setLabels}></LabelList>
        
        {/* credits for wheel art */}
        <a href='https://www.freepik.com/vectors/clip-art'>Clip art vector created by brgfx - www.freepik.com</a>
      </div>
    );
  }
}


export default App;