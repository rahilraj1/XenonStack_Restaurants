import React from 'react'

function MenuCard({data})
{
     
    return(
        <>
        <section className='main-card--cointainer'>
          {data.map((currElement)=>
          {
                return(
                    <div className='card-container'>
            <div className='card'>
              <div className='card-body'>
                <span className='card-number card-circle subtle'>{currElement.id}</span>
                <span className='card-author subtle'style={{color:'black'}}>{currElement.category}</span>
                <h2 className='card-title'>{currElement.name}</h2>
                <span className='card-description'>{currElement.description} </span>
                
                <div className='card-read'>Read</div>
                <img src={currElement.image} alt="images" className='card-media' />
              </div> 
              <span>Price: {currElement.price}</span>
              <span className='card-tag subtle'>Order Now</span>
           </div>
          </div>
          
                )
          })}
          
        </section>
        
        </>
    )
}
export default MenuCard
