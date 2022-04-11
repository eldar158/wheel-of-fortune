import './LabelList.css';

import LabelBlock from './LabelBlock/LabelBlock';


function LabelList(props) {
  const {labels, setLabels} = {...props}

  function setLabel (i, newLabel) {
    changeLabels(true , (newLabels) => newLabels[i] = newLabel)
  }
  function addLabel (newLabel) {
    changeLabels(labels.length < 12 , (newLabels) => newLabels.push(newLabel))
  }
  function removeLabel (i) {
    changeLabels(i < labels.length , (newLabels) => newLabels.splice(i, 1))
  }
  function changeLabels (condition, changeFunction) {
    if ( !condition ) return
    const newLabels = [...labels]
    changeFunction(newLabels)
    setLabels(newLabels)
  }

  function renderLabelBlocks(labels, setLabel) {
    return labels.map((label, i) => {
      return <LabelBlock
        key={i}
        labelKey={i}
        label={label}
        setLabel={setLabel}
      ></LabelBlock>
    })
  }
  
  
  return (
    <div className="LabelList">
      <img className='removeButton noselect'
          src='/assets/images/removeButton.png'
          alt='removeButton'
          onClick={(e) => removeLabel(labels.length - 1)}
      ></img>
      <img className='addButton noselect'
          src='/assets/images/addButton.png'
          alt='addButton'
          onClick={(e) => addLabel('')}
      ></img>
      
      {renderLabelBlocks(labels, setLabel)}
    </div>
  );
}


export default LabelList;
