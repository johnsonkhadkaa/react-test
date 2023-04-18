import { useState } from 'react'
import React from 'react'
import './style.css'

const Counter = () => {

  const[count , setCount] = useState(0);

  return (
    <>
      <div >
        <div className='child-div'>
        <h1 className='fa '>{count}</h1>
          <div className='card-read:after btn-group__item' onClick={() => setCount(count +1 )}><button>Increment</button></div>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <div className='card-read:after btn-group__item' onClick={() => count > 0 ? setCount(count -1 ) : setCount(0)}><button>Decrement</button></div>
        </div>
      </div>
    </>
  )
}

export default Counter