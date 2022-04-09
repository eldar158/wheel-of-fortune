import './WheelLabel.css';

function WheelLabel(props) {
  const {text, r, onClick, selected} = {...props}
  const lineLength = 9
  
  var formattedText = text
   if(text.length > lineLength) {
    formattedText = text.substring(0,9) + '\n' + text.substring(9, text.length)
  }

  const style = {transform: `rotate(${r}deg)`}
  const className = selected ? "WheelLabel noselect selected" : "WheelLabel noselect"
  return (
    <div
      className={className}
      style = {style}
      onClick={onClick}
    >
      <p>{formattedText}</p>
    </div>
  );
}



export default WheelLabel;