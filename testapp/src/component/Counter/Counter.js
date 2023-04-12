import React from 'react'
import './style.css'

const Counter = () => {
  return (
    <>
      <div >
        <div className='child-div'>
          <div className='card-read:after btn-group__item'><button>Increment</button></div>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <div className='card-read:after btn-group__item'><button>Decrement</button></div>
        </div>
      </div>
    </>
  )
}

export default Counter