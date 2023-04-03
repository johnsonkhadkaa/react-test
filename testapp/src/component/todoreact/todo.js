import React from 'react'
import './style.css'

const Todo = () => {
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
                        />
                        <i className="fa fa-plus" add-btn></i>
                    </div>
                    {/* Show our Items */}
                          <div className='showItems'>
                            <div className='eachItem'>
                                <h3>apple</h3>
                                <div className='todo-btn'>
                                <i className="far fa-edit" add-btn></i>
                                <i className="far fa-trash-alt" add-btn></i>
                                </div>
                            </div>
                          </div>


                    {/* Remove Items */}
                    <div className='showItems'>
                        <button className='btn effect04' data-sm-link-text='Remove All'>
                            <span>CHECK ITEMS</span>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Todo