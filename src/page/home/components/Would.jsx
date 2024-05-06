// import { useEffect, useState } from "react"

import Button from '../../../components/Button';
import data from '/src/data/would.json'


function Would() {
  console.log(data[0].would, "data");
    
    return (
    <div className='would container  mx-auto  ml:px-1 bg-categoriyes   opacity-75 flex flex-wrap items-center justify-around  '>
        {data.map( (item, index) => (
            <div className='w-[247px] ml:hidden xl:block' key={index}>
                <img src={item.image} alt="img" />
                <h2>{item.name}</h2>
                <p>{item.description}</p>
            </div>
        ))}
        <div className='w-[400px]'>
          <h2>Would you like to join newsletters?</h2>
          <from className='xl:flex lg:flex    items-center md:ml-5 ml:ml-14'>
          <input className='w-[290px] xl:mt-2 lg:mt-2 ml:w-[190px] py-1 ml:ml-[-50px] xl:ml-0 rounded-sm ml:mb-2  border border-black' type="text" placeholder='enter your email address...' />
          <Button className={'ml:ml-24 xl:ml-0 lg:ml-0 ml:rounded-sm'} title={'Join'}/>
          </from>
          <p>We usually post offers and ] in newsletter. We’re your online houseplant destination. We offer a wide range of houseplants and accessories shipped directly from our (green)house to yours! </p>
        </div>
    </div>
  )
}

export default Would