import './Wheel.css';

function Label(props) {
  const {text, spaceCount, slot, r, onClick} = {...props}

  const spaces = '\u00A0'.repeat(spaceCount)
  const style = {transform: `rotate(${r + (slot * 30) - 15}deg)`}

  return (
    <p 
      className="Label noselect"
      style = {style}
      onClick={onClick}
    >
      {spaces + text}
    </p>
  );
}

export default Label;