import React from 'react'
import './style.css'

const Counter = () => {
  return (
    <>
      <div >
        <div className='child-div'>
          <div className='btn effect04'><button>Increment</button></div>
          <i className="far fa-plus add-btn" ></i>
          <div className='btn effect04'><button>Decrement</button></div>
          <i className="far fa-minus add-btn" ></i>

          <div className='todo-btn'>
            <i className="far fa-plus add-btn "></i>
            <i className="far fa-trash-alt add-btn" ></i>
          </div>
        </div>
      </div>
    </>
  )
}

export default Counter