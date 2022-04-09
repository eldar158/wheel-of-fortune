function spinWheel (state, setState) {
  const r = state.r
  const w =  getInitialW()
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

function getInitialW() {
  const constW = 10
  const randW = 20
  return constW + Math.random() * randW
}


function getSelectedLabelKey(labelCount, rotation) {
  const maxKey = labelCount - 1
  const progression = Math.floor((rotation % 360) / 30)
  return (maxKey - progression) % labelCount
}


export {spinWheel, getSelectedLabelKey}