import React, { useReducer } from 'react'
import './style.css'

// const IncrementFunc = (curElem)=> {
//     return setCount(curElem + 1)
// }
const reducer = (state , action)=>{
  if(action.type === "INCR") {
    state = state + 1
  }
  if(state > 0 && action.type === "DECR") {
    state = state - 1
  }
  return state
}

const UseReducer = () => {
    const initialData = 10
   const[state , dispatch] = useReducer(reducer , initialData)
   // const[count , setCount] = useState(0);

  return (
    <>
    <div className='center-div'>
    <p>{state}</p>
    <div class='btn-group__item' onClick={() => dispatch({type : "INCR"}) }>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    INCR
    </div>
    <div class='btn-group__item' onClick={() => dispatch({type : "DECR"})}>
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

export default UseReducer;