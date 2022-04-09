import './WheelLabel.css';

function WheelLabel(props) {
  const {text, slot, r, onClick} = {...props}
  const spaceCount = 20

  const spaces = '\u00A0'.repeat(spaceCount)
  const style = {transform: `rotate(${r + (slot * 30) - 15}deg)`}

  return (
    <p 
      className="WheelLabel noselect"
      style = {style}
      onClick={onClick}
    >
      {spaces + text}
    </p>
  );
}

export default WheelLabel;