import React from 'react'
import Logo from '/public/Logo.svg'
import { GrLocation } from "react-icons/gr";
import { CgMail } from "react-icons/cg";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { RiFacebookFill } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import Paypal from '/public/paypal.png'
function Footer() {
    const MyAccount = [
        
            'My Account',
            'Our stores',
            'Contact us',
            'Career',
            'Specials'
        
    ]
    const Guide = [
        'Help Center',
        'How to Buy',
        'Shipping & Delivery',
        'Product Policy',
        'How to Return'
    ]
    const Categories = [
       'House Plants',
        'Potter Plants',
        'Seeds',
        'Small Plants',
        'Accessories'
    ]
    const Social = [
        <RiFacebookFill/>,
        <FaInstagram />,
        <FaTwitter />,
        <FaLinkedinIn />
    ]
  return (
    <div className=' container  mx-auto  my-4'>
        <div className=' px-2 bg-bg_footer py-[27px]'>
                <div className='flex flex-wrap xl:ml-0 sm:ml-20 ml:ml-0 gap-2'>
                <img src={Logo} alt="" className='mr-[87px]' />
                <ul className='footer_bottom flex flex-wrap gap-1'>
                    <li><GrLocation  className='text-2xl text-green' />
                         70 West Buckingham Ave.
                        Farmingdale, NY 11735</li>
                    <li><CgMail className='text-2xl text-green'/>contact@greenshop.com</li>
                    <li><MdOutlinePhoneInTalk className='text-2xl text-green'/>+88 01911 717 490</li>
                </ul>
            </div>
        </div>
            <div className="footer_faq xl:block xl:flex flex flex-wrap xl:ml-0 sm:ml-24 list-none mt-[33px] px-2 ml:hidden ">
                <div className='mr-[166px]'>
                    <h2>My Account</h2>
                    {MyAccount.map((el, index)=>(
                        <li key={index}>{el}</li>
                    ))}
                </div>
                <div className='mr-[100px]'>
                    <h2>Help & Guide</h2>
                        {Guide.map((el, index)=>(
                        <li key={index}>{el}</li>
                    ))}
                </div>
                <div className='mr-[113px]'>
                    <h2>Categories</h2>
                        {Categories.map((el, index)=>(
                        <li key={index}>{el}</li>
                    ))}
                </div>
                <div className=''>
                    <h2>Social Media</h2>
                    <div className='flex gap-3 my-4 cursor-pointer'>
                    {Social.map((el, index)=>(
                        <div className='p-2 border-2 border-bg_footer rounded-md text-green_soc' key={index}>{el}</div>
                    ))}
                    </div>
                    <h2 className='mt-2'>We accept</h2>
                    <img src={Paypal} alt="" className='my-2'/>
                </div>
                </div>
    </div>
  )
}

export default Footer