import './LabelList.css';

import LabelBlock from './LabelBlock/LabelBlock';


function LabelList(props) {
  const {labels, setLabels} = {...props}

  function setLabel (i, newLabel) {
    const newLabels = [...labels]
    newLabels[i] = newLabel
    setLabels(newLabels)
  }
  function addLabel (newLabel) {
    if ( labels.length >= 12 ) return
    const newLabels = [...labels]
    newLabels.push(newLabel)
    setLabels(newLabels)
  }
  function removeLabel (i) {
    if ( i >= labels.length ) return
    const newLabels = [...labels]
    newLabels.splice(i, 1)
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
      <img className='addButton noselect'
          src='/assets/addButton.png'
          alt='addButton'
          onClick={(e) => addLabel('')}
      ></img>
      <img className='removeButton noselect'
          src='/assets/removeButton.png'
          alt='removeButton'
          onClick={(e) => removeLabel(labels.length - 1)}
      ></img>
      
      {renderLabelBlocks(labels, setLabel)}
    </div>
  );
}


export default LabelList;
