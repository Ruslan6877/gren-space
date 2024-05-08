import Logo from '/public/Logo.svg'
import { CiShoppingCart } from "react-icons/ci"
import { CiSearch } from "react-icons/ci"

// import { useState } from 'react'
import {  Link, NavLink } from 'react-router-dom'
import { IoFilter } from "react-icons/io5";
import { useState } from 'react'
// import Modal from '../Modal'
import Button from './Button';

 
  function Header({ buyCount , setBuyCount }) {
const [showModal, setShowModal] = useState(false)

const handleToggle = () => {
  setShowModal(!showModal)
}

  return (
    <div className='ml:justify-between ml:w-[1250px] ml:gap-10  py-5 bg-white flex justify-between px-2 pb-[17px] items-center  container  mx-auto border-b-[0.3px] border-b-solid border-b-green_soc'>
        {/* <Link to={'/'} > */}
        <img src={Logo} alt="logo" className='ml:ml-[-50px] ml:mr-[60px] sm:ml-5  lg:mr-4 sm:mr-4 ml:w-20 xl:w-[150px]'/>
        {/* </Link> */}
        <ul className=' xl:block sm:hidden md:hidden lg:block ml:hidden flex flex-wrap justify-around items-center gap-4 cursor-pointer  '>
            <NavLink   className='mx-3' to={`/`} >Home</NavLink>
            <NavLink to={`/shop`}  className='mx-3' >Shop</NavLink>
            <NavLink   className='mx-3' to={`/blogs`}>Blogs</NavLink>
            <NavLink   className='mx-3' to={`/plants`}>Plant Care</NavLink>
        </ul>
          {/* <button  className='lg:hidden sm:block cursor-pointer bg-green rounded-lg p-3 ml:w-8 ml:h-8 ml:p-2' ><IoFilter className='text-white'/></button> */}
        <div className="shop flex items-center gap-[30px]">
        <CiSearch className='text-xl  cursor-pointer sm:hidden ml:hidden xl:block'/>
        <div>
          <Link to={`shoping`}>
        <CiShoppingCart  className='text-xl cursor-pointer absolute sm:block ml:block sm:mx-4  xl:block'/>
        <span className='border rounded-2xl px-1  text-[8px] relative bottom-[10px] xl:left-[28px] ml:left-[11px] lg:left-[26px] sm:left-[26px] bg-green border-none text-white'>{buyCount.length}</span>
          </Link>
        </div>


        <Link to={`/register`}>
        
          <Button className={'lg:ml-2 sm:ml-2 md:ml-2 '}  title={'Login'} />
        </Link>
          {/* onClick={handleToggle} */}
          <div className='absolute top-5 left-[430px] w-500px'>
          {/* {
            showModal && (
              <Modal/>
            )
          } */}
          </div>
        </div>
    </div>
  )
}

export default Header