import React from 'react'
import Kelp from '../images/kelp.gif';
import './ClickToEnter.scss'

function enter() {
  location.href = 'home.html'
}

export function ClickToEnter(props) {
  return <div className='click-to-enter' onClick={enter}>
    <h1>you need more seaweed</h1>
    <small>Click it to begin.</small>
    <img src={Kelp} />
  </div>
}