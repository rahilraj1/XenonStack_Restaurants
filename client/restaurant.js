import React from 'react';
import {useState} from 'react';
import menuAPI from './menuAPI'
import MenuCard from './MenuCard'
function Restraunt()
{
    const [menuData,updateMenu]=useState(menuAPI)
    function filterItem(category)
    {
       const updated=menuAPI.filter((currElement)=>
       {
           return(
              currElement.category===category
           )
       })
       updateMenu(updated)
    }
    return(
       <>
        <nav className='navbar'>
            <div className='btn-group'>
              <button className='btn-group__item' onClick={()=>filterItem("Breakfast")}>Breakfast</button>
              <button className='btn-group__item' onClick={()=>filterItem("Lunch")}>Lunch</button>
              <button className='btn-group__item'onClick={()=>filterItem("Evening")}>Evening</button>
              <button className='btn-group__item'onClick={()=>filterItem("Dinner")}>Dinner</button>
              <button className='btn-group__item'onClick={()=>filterItem("Fast-food")}>Fast-food</button>
              <button className='btn-group__item'onClick={()=>filterItem("Drinks")}>Drinks</button>
              <button className='btn-group__item'onClick={()=>updateMenu(menuAPI)}>All</button>
            </div>
        </nav>
         <MenuCard data={menuData} />
       </>
    ) 
}
export default Restraunt;
