import './Monitor.css';


function Monitor(props) {
  
  return (
    <div className="Monitor">
      <div className='display'>
        {props.text}
      </div>
    </div>
  );
}


export default Monitor;
