import React, {useEffect, useState } from 'react'
import './style.css'

// const IncrementFunc = (curElem)=> {
//     return setCount(curElem + 1)
// }

const UseEffect = () => {
    const[count , setCount] = useState(0);

    useEffect(()=>{
      document.title = `Chats(${count})`
    })

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

export default UseEffect;