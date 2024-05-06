import React from 'react'
import blog from '/src/data/blogs.json'

function Blogs() {
  return (
    <div className='container  mx-auto text-center my-10'>
        <h1 className='font-bold text-2xl text-white leading-5'>Our Blog Posts</h1>
        <p className='font-normal text-sm text-white leading-5'>We are an online plant shop offering a wide range of cheap and trendy plants. </p>
        <div className='flex flex-wrap justify-around text-start my-5'>
            {blog.map ((item, index) => (
                <div className='w-[260px] my-2 bg-welcome' key={index}>
                    <img src={item.img} alt="img" />
                    <div className='px-2 py-1'>
                        <p className='font-medium text-sm leading-4 text-green'>{item.data}</p>
                        <h3 className='w-[190px] font-bold text-lg leading-5'>{item.name}</h3>
                        <p className='font-normal text-base leading-5'>{item.description}</p>
                        <button className='font-medium text-sm leading-4'>Read More -</button>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Blogs