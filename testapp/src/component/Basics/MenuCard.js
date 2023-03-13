import React from 'react'

const MenuCard = ({ menuData }) => {
    console.log(menuData)
  return (
    <>
    <div className='card-container'>
        <div className='card'>
            <div className='card-body'>
                <span className='card-number card-circle subtle'>1</span>
                <span className='card-author subtle'>Breakfast</span>
                <h2 className='card-title' >Maggie</h2>
                <span className='card-description subtle' >Lorem Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel pariatur voluptate consequatur placeat eos libero dolores, officiis commodi ea, eius deleniti molestias quas dicta possimus Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque voluptatem, impedit voluptas ipsum rerum quibusdam autem perspiciatis molestias harum expedita accusantium sunt cum nobis eum! Ex eius praesentium est ullam. provident voluptates similique cupiditate qui? ipsum dolor sit amet consectetur adipisicing elit. Sunt, laudantium error. Praesentium, voluptate quod. Explicabo ipsum assumenda veritatis expedita enim facilis pariatur, similique inventore quo!</span>
                <div className='card-read'>Read</div>
                <span className='card-tag subtle'>Order Now</span>
            </div>
        </div>
    </div>
    </>
  )
}

export default MenuCard