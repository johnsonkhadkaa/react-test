import React from 'react'

const MenuCard = ({ menuData }) => {
    return (
        <>
            <section className='main-card--cointainer'>
                {menuData.map((currElem) => {

                    const { id, name, image, description, category } = currElem
                    return (
                        <>
                            <div className='card-container' key={id}>
                                <div className='card'>
                                    <div className='card-body'>
                                        <span className='card-number card-circle subtle'>{id}</span>
                                        <span className='card-author subtle'>{category}</span>
                                        <h2 className='card-title' >{currElem.name}</h2>
                                        <span className='card-description subtle' >{description}</span>
                                        <div className='card-read'>Read</div>
                                        {/* <img src='https://t3.ftcdn.net/jpg/02/02/21/78/240_F_202217885_SR8TwNqgjgSGFKGBe0LNGki8DccGvJXE.jpg' alt='images' className='card-media' /> */}
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