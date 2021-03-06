import React from 'react'
import { useSpring, animated } from 'react-spring'
import './Animation.css' // Icons made by Freepik from www.flaticon.com

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2]
const trans1 = (x, y) => `translate3d(${x / 12}px,${y / 12}px,0)`
const trans2 = (x, y) => `translate3d(${x / 7 + 30}px,${y / 7 - 68}px,0)`
const trans3 = (x, y) => `translate3d(${x / 5 - 50}px,${y / 5 - 68}px,0)`
const trans4 = (x, y) => `translate3d(${x / 2}px,${y / 2}px,0)`

function Animation() {
  const [props, set] = useSpring(() => ({ xy: [0, 0], config: { mass: .750, tension: 550, friction: 140 } }))
  return (
    <div className="container" onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}>
      <animated.div className="card1" style={{ transform: props.xy.interpolate(trans1) }} />
      <animated.div className="card2" style={{ transform: props.xy.interpolate(trans2) }} />
      <animated.div className="card3" style={{ transform: props.xy.interpolate(trans3) }} />
      <animated.div className="card4" style={{ transform: props.xy.interpolate(trans4) }} />
    </div>
  )
}

export default Animation;
