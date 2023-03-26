import React, { useState } from 'react'

// const IncrementFunc = (curElem)=> {
//     return setCount(curElem + 1)
// }

const UseState = () => {
    const[count , setCount] = useState(0);
  return (
    <>
    <div className='center-div'>
    <p>{count}</p>
    <div class='btn-group__item' onClick={() => setCount(count +1 )}>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    INCR
    </div>
    <div class='btn-group__item' onClick={() => count > 0 ? setCount(count - 1 ) : setCount(0)}>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    DECR
    </div>
    </div>
    </>
  )
}

export default UseState