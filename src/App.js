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
      labels: ["סושי", "המבורגר", "פיצה", "נאצ'וס", "נודלס", "סביח", "סלטים", "פסטה", "סנדוויצ'ים", "קארי", "אינג'רה", "שווארמה"],
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

    const selectedLabelKey = getSelectedLabelKey(spin.r)
    const monitorText = labels[selectedLabelKey]
    
    return (
      <div className="App" dir='rtl'>
        <Monitor text={monitorText} wheelStopped={spin.w <= 0}></Monitor>
        <Wheel spin={spin} setSpin={setSpin} labels={labels} selectedLabelKey={selectedLabelKey}></Wheel>
        <LabelList labels={labels} setLabels={setLabels}></LabelList>
        
        {/* credits for wheel art */}
        <a href='https://www.freepik.com/vectors/clip-art'>Clip art vector created by brgfx - www.freepik.com</a>
      </div>
    );
  }
}


export default App;