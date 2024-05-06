import React, { useState } from 'react'


import { Link } from 'react-router-dom'
 import Welcome from './components/Welcome'
import Find from './components/Find'
import Card from '/src/components/Card'

import Categoriyes from './components/Categoriyes';
import Blogs from './components/Blogs'
import Would from './components/Would'
import Slider from 'react-slick'
function Home({data, handleBtn, allPro, setAllPro}) {



  let settings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 3,
    slidesToScroll: 3,
    rows: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        },
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        },
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        },
      }
    ]
  };
    

  const value = localStorage.getItem("val") ? localStorage.getItem("val") : 100;



  return (
    <div className='bg-plant'>
    {/* <Header/> */}
    <Welcome/>
    
    <div className='container  mx-auto  my-2 '>
    <div className=' xl:flex items-center  '>
    <Categoriyes />
    <button className='relative right-[320px] top-5 px-4 py-2 bg-green text-white rounded-md' onClick={ handleBtn} >Filter</button>

    <div className='w-[800px] mr-10 '>
    <Slider {...settings}>
     {allPro && 
     allPro.map((num)=>(
      <Card item={num} key={num}/>
     ))}

  
    </Slider>
    </div>
    {/* <Card data = {data} /> */}
    </div>
    </div>
    <div className='mt-[100px]'>

    <Find />
    <Blogs/>
    <Would />
    </div>
  
    {/* <Footer/> */}
    </div>
  )
}

export default Home