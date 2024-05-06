import React from 'react'

function Button({title, className, onClick}) {
  return (
  <button onClick={onClick}   className={`${className} px-4  rounded-md   py-1 text-white bg-green  flex items-center justify-center gap-2 cursor-pointer`}>{title}</button>
    
  )
}

export default Button