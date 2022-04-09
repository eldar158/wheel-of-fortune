import './WheelLabel.css';

function WheelLabel(props) {
  const {text, slot, r, onClick} = {...props}
  
  const style = {transform: `rotate(${r + (slot * 30) - 15}deg)`}

  return (
    <p 
      className="WheelLabel noselect"
      style = {style}
      onClick={onClick}
    >
      {text}
    </p>
  );
}

export default WheelLabel;