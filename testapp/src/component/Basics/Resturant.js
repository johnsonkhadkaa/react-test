import React, { useState } from 'react'
import './style.css'
import Menu from './menuApi'
import MenuCard from './MenuCard'
import Navbar from './Navbar'
import UseState from '../Hooks/UseState'

const uniqueList = [
  ...new Set(
  Menu.map((curElem) => {
      return curElem.category
}
)), 
"ALL"
]
console.log(uniqueList)

const Resturant = () => {
  const [menuData , setMenuData] = useState(Menu);
  const [menuList , setMenuList] = useState(uniqueList)

  

  const filterItem = (category)=>{

    if(category === "ALL"){
       return setMenuData(Menu)
    }
    
    const updatedList = Menu.filter((curElem)=>{
       return curElem.category === category
    })
    setMenuData(updatedList)
  }

  return (
       <>
       {/* < UseState /> */}
  <Navbar filterItem = {filterItem}  menuList = {menuList}/>
  <MenuCard menuData = {menuData} />
    </>
  )
}

export default Resturant