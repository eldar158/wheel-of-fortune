import './WheelLabel.css';

function WheelLabel(props) {
  const {text, slot, r, onClick} = {...props}
  const lineLength = 9
  
  var formattedText = text
   if(text.length > lineLength) {
    formattedText = text.substring(0,9) + '\n' + text.substring(9, text.length)
  }

  const style = {transform: `rotate(${r + (slot * 30) - 15}deg)`}

  return (
    <div
      className="WheelLabel noselect"
      style = {style}
      onClick={onClick}
    >
      <p>{formattedText}</p>
    </div>
  );
}

export default WheelLabel;