// import React, { useState } from 'react'

import Sale from '/src/assets/Super Sale Banner.svg'

function Categoriyes({setFilterP, data, filterP}) {
  // const [value, setValue] = useState(10);



  const handleChange = (e) => {
    localStorage.setItem( "val", e.target.value);
    // setValue(e.target.value);
  }

 
  
  return (
    <div className='xl:block lg:block md:hidden sm:hidden ml:hidden lg:h-[400px]   categoriyes container  mx-auto w-[310px] mt-5  xl:h-[900px] bg-categoriyes p-2 ml-4 '>
        <ul>
            <h2 className='xl:block ml:hidden'>Categories</h2>
            <div className='xl:block ml:hidden'>
            <li>House Plants</li>
            <li>Potter Plants</li>
            <li>Seeds</li>
            <li>Small Plants</li>
            <li>Big Plants</li>
            <li>Succulents</li>
            <li>Trerrariums</li>
            <li>Gardening</li>
            <li>Accessories</li>    
            </div>



    <form className='mx-3 my-2 mb-12'>
        {/* <p>{value}</p> */}
        <h2>Price Range</h2>
        <input type="range" max={1000} min={10}  onChange={(e) => handleChange(e)}/>
    </form>
    
  
        {/* <Button onClick={ handleBtn} title={'Filter'}/> */}



            <div className='xl:block ml:hidden'>
                <h2>Size</h2>
                <li>Small</li>
                <li>Medium</li>
                <li>Large</li>
            </div>
            <img src={Sale} alt="" className='h-[270px] ml-7'/>
        </ul>
    </div>
  )
}

export default Categoriyes