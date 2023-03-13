import React from 'react'

const MenuCard = ({ menuData }) => {
    return (
        <>
            <section className='main-card--cointainer'>
                {menuData.map((currElem) => {
                    return (
                        <>
                            <div className='card-container' key={currElem.id}>
                                <div className='card'>
                                    <div className='card-body'>
                                        <span className='card-number card-circle subtle'>{currElem.id}</span>
                                        <span className='card-author subtle'>{currElem.category}</span>
                                        <h2 className='card-title' >{currElem.name}</h2>
                                        <span className='card-description subtle' >{currElem.description}</span>
                                        <div className='card-read'>Read</div>
                                        <img src='https://t3.ftcdn.net/jpg/02/02/21/78/240_F_202217885_SR8TwNqgjgSGFKGBe0LNGki8DccGvJXE.jpg' alt='images' className='card-media' />
                                        <span className='card-tag subtle'>Order Now</span>
                                    </div>
                                </div>
                            </div>
                        </>
                    )
                })}
            </section>
        </>
    )
}

export default MenuCard