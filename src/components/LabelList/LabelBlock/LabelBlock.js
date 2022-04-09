import './LabelBlock.css';


function LabelBlock(props) {
  const {labelKey, label, setLabel} = {...props}

  function onChangeLabel (e) {
    const newLabel = e.target.value
    setLabel(labelKey, newLabel)
  }

  return (
    <div className="LabelBlock">
      <textarea className='labelTextarea' 
        value={label}
        onChange={(e) => onChangeLabel(e)}
      ></textarea>
    </div>
  );
}


export default LabelBlock;
