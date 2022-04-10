import './Monitor.css';


function Monitor(props) {
  const {text, selected} = {...props}

  const displayClass = selected ? 'display selected' : 'display'
  
  return (
    <div className="Monitor">
      <div className='background'>
        <div className={displayClass}>
          {text}
        </div>
      </div>
    </div>
  );
}


export default Monitor;
