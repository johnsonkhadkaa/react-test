import React, { useState } from 'react'
import './style.css'

const Todo = () => {

    const [inputData, setInputData] = useState(" ")
    const [items, setItems] = useState([])

    // To add the Items
    const addItem = () => {
        if (!inputData) {
            alert("Please add the items.")
        } else {
           const myNewInputData = {
                 id : new Date().getTime().toString(),
                 name : inputData,
           }
            setItems([...items, myNewInputData])
            setInputData("")
        }
    }

// To delete the items
    const deleteItem = (index) => {
        const updatedItems = items.filter((currElem)=>{
            return currElem.id !== index
        })
        setItems(updatedItems)
    }

// To remove all items
     const removeAllItems = () => {
        setItems([])
     }


    return (
        <>
            <div className='main-div'>
                <div className='child-div'>
                    <figure>
                        <img src='./images/todo.svg' alt='todologo' />
                        <figcaption>Add Your List Here ✌</figcaption>
                    </figure>
                    <div className='addItems'>
                        <input
                            type="text"
                            placeholder='✍ Add Item' 
                            className='form-control'
                            value={inputData}
                            onChange={(event) => setInputData(event.target.value)}
                        />
                        <i className="fa fa-plus add-btn" onClick={addItem} ></i>
                    </div>
                    {/* Show our Items */}
                    <div className='showItems'>
                        {items.map((currElem) => {
                            return (
                                <div className='eachItem' key={currElem.id}>
                                    <h3>{currElem.name}</h3>
                                    <div className='todo-btn'>
                                        <i className="far fa-edit add-btn "></i>
                                        <i className="far fa-trash-alt add-btn" onClick={()=>deleteItem(currElem.id)} ></i>
                                    </div>
                                </div>
                            )
                        })}

                    </div>


                    {/* Remove Items */}
                    <div className='showItems'>
                        <button className='btn effect04' data-sm-link-text='Remove All' onClick={removeAllItems}>
                            <span>CHECK ITEMS</span>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Todo