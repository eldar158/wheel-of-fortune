export default function spin (state, setState) {
  requestAnimationFrame(() => {
    spinAnimation(state, setState)
  })
}

function spinAnimation (state, setState) {
  const {r, w, a} = {...state}

  if ( Math.sign(w) === Math.sign(a)) return

  const newState = {r: r + w, w: w + a, a: a}

  setState(newState, () => {
    requestAnimationFrame(() => {
      spinAnimation(newState, setState)
    })
  })
}