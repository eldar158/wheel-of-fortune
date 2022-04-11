function spinWheel (state, setState) {
  const r = state.r
  const w =  getRandomInital()
  const a = -0.1
  const newState = {r: r, w: w}

  const finished = new Promise((resolve) => {
    requestAnimationFrame(() => {
      spinAnimation(newState, setState, a, resolve)
    })
  })
  return finished
}

function spinAnimation (state, setState, a, resolve) {
  const {r, w} = {...state}

  if ( Math.sign(w) === Math.sign(a)) {
    resolve()
    return
  }
  const newState = {r: r + w, w: w + a}

  setState(newState, () => {
    requestAnimationFrame(() => {
      spinAnimation(newState, setState, a, resolve)
    })
  })
}

function getRandomInital() {
  const constW = 10
  const randW = 20
  return constW + Math.random() * randW
}


function getSelectedLabelKey(rotation) {
  const labelCount = 12 // the wheel contains total of 12 labels
  const maxKey = labelCount - 1
  const progression = Math.floor((rotation % 360) / 30)
  return (maxKey - progression) % labelCount
}


export {spinWheel, getSelectedLabelKey}