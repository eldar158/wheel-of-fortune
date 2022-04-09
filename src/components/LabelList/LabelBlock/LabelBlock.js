import './LabelBlock.css';


function LabelBlock(props) {
  const {labelKey, label, setLabel} = {...props}
  const maxLength = 18

  function onChangeLabel (e) {
    const newLabel = e.target.value
    if ( newLabel.length > maxLength ) return
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
