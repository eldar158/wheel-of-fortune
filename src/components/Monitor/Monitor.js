import './Monitor.css';


function Monitor(props) {
  const {text, wheelStopped} = {...props}

  const displayClass = wheelStopped ? 'display highLighted' : 'display'
  
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
