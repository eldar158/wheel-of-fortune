import './LabelList.css';

import LabelBlock from './LabelBlock/LabelBlock';


function LabelList(props) {
  const {labels, setLabel} = {...props}

  function createLabelBlocks(labels, setLabel) {
    return labels.map((label, i) => {
      return (
        <LabelBlock
          key={i}
          labelKey={i}
          label={label}
          setLabel={setLabel}
        ></LabelBlock>
      )
    })
  }


  const labelListBlocks = createLabelBlocks(labels, setLabel)
  const addButton = 5 //todo
  const deleteButton = 5 //todo

  return (
    <div className="LabelList">
      {labelListBlocks}
    </div>
  );
}


export default LabelList;
