

// import { useEffect, useState } from "react";

import { Checkbox } from "@mui/material"
// import { MdFavoriteBorder } from "react-icons/md"
import { Link } from "react-router-dom"






function Card({item, }) {
   

  return (
    <div className="opacity-95 flex flex-wrap justify-end container  mx-auto  ">
      
        <div className="flex   ">
        <div key={item.id} className="w-[258px] px-2 py-1 bg-white mb-7">
          <Link to={`/shop/${item.id}`} >
            <img className="w-[148px] ml-9 h-[200px]" src={item.image} alt="fd" />
          </Link>
            {/* <Checkbox   icon={<MdFavoriteBorder />} checkedIcon={<MdFavoriteBorder />} /> */}
          <h1 className="text-sm text-text_bg font-normal" >{item.category}</h1>
          <p className="text-green font-semibold text-xl ">${item.price}</p>
          </div>
        </div>
        
    </div>
  )
}

export default Card