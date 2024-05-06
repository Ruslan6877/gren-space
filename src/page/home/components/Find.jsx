import React from 'react'
import find from '/src/data/find.json'
import Button from '../../../components/Button'


function Find() {
  return (
    <div className='find flex flex-wrap  container  mx-auto   gap-2 lg:ml-18 sm:ml-18 ml:ml-16 sm:ml-14 xl:ml-4   p-3 '>
        {find.map ((item, index) => (
            <div key={index} className=' w-[586px] flex items-center xl:ml-4 xl:px-5 xl:m-0 sm:m-auto ml:m-auto ml:ml-[-50px] ml:px-7 justify-between bg-welcome'>
                <img src={item.img} className='w-[300px]  xl:block lg:block sm:hidden ml:hidden' alt="img" />
                <div className='find_text my-4 xl:text-end sm:text-center ml:text-center sm:pt-3 px-2'>
                    <h2 className=' font-bold text-lg leading-7'>{item.name}</h2>
                    <p>{item.description}</p>
                    <Button  title={'Find More'}/>
                </div>
            </div>
        ))}
    </div>
  )
}

export default Find