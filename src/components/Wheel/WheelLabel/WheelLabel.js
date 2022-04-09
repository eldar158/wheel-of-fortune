import './WheelLabel.css';

function WheelLabel(props) {
  const {text, r, onClick, selected} = {...props}

  const style = {transform: `rotate(${r}deg)`}
  return (
    <div
      className='WheelLabel noselect'
      style = {style}
      onClick={onClick}
    >
      <span className={selected ? 'selected' : ''}>{text}</span>
    </div>
  );
}



export default WheelLabel;