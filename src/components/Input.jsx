import React from 'react'
import { TiStarburst } from "react-icons/ti";



function Input({ label, type = "text", placeholder, className = 'w-[350px] border p-1', required }) {
    
  return (
    <div>
        <label className='flex items-center gap-1 my-2'>{label} {required && <TiStarburst className='text-red-600'/>}</label>
        <input type={type} placeholder={placeholder} className={className}/>
    </div>
  )
}

export default Input