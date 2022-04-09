export default function spin (state, setState) {
  const {r, w, a} = {...state} 
  const newState = {r: r, w: getInitialW(), a: a}

  const finished = new Promise((resolve) => {
    requestAnimationFrame(() => {
      spinAnimation(newState, setState, resolve)
    })
  })
  return finished
}

function spinAnimation (state, setState, resolve) {
  const {r, w, a} = {...state}

  if ( Math.sign(w) === Math.sign(a)) {
    resolve()
    return
  }
  const newState = {r: r + w, w: w + a, a: a}

  setState(newState, () => {
    requestAnimationFrame(() => {
      spinAnimation(newState, setState, resolve)
    })
  })
}


function getInitialW() {
  const constW = 10
  const randW = 20
  return constW + Math.random() * randW
}