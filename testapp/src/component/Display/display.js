import React, { useState } from 'react'
import './style.css'




const Display = () => {
const [inputData , setInputData] = useState('')
const [items, setItems] = useState([])

// Add the items 
const addItem = () => {
    if(!inputData){
        alert('Please enter the value')
    }else{
        setItems([...items , inputData])
    }
}

  return (
    <>
    <div className='main-div'>
        <div className='child-div'>
            <figure>
            <figcaption>Add Your List Here ✌</figcaption>
            </figure>
            <div className='addItems'>
                <input  
                   type='text' 
                   placeholder='✍ Add Items'
                   className='form-control' 
                   value={inputData}
                   onChange={(event)=>setInputData(event.target.value)}
                />
                <i className="fa fa-plus add-btn" onClick={addItem} ></i>
            </div>

            {/* Show items */}
                <div className='showItems'>
 
              { items.map((currElem , index)=> {
                      return(
                      <div className='eachItem' key={index}>
                        <h3>{currElem}</h3>
                        <div className='todo-btn'>
                        <i className="far fa-edit add-btn" ></i>
                        <i className="far fa-trash-alt add-btn" ></i>
                        </div> 
                    </div>
                 )
              })}   
                </div>

           {/* Remove all items */}
            <div className='showItems'>
              <button className='btn effect04' data-sm-link-text = "Remove All" >
                <span>Check List</span>
                </button>
            </div>
        </div>
    </div>
    </>
  )
}

export default Display