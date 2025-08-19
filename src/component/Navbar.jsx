import React from 'react'
import { IoIosArrowBack, IoIosArrowDown } from 'react-icons/io'
import logo from '../assets/logo.png'

const Navbar = () => {

  return (
     <nav className="flex items-center  text-white  justify-between p-3 bg-[#783A8D] ">
<h1 className="font-black text-[21px]"><IoIosArrowBack size={25} style={{

        strokeWidth: "70"
}} /></h1>
<h1 className="font-bold text-[21px] flex text-center ">Home <img src={logo} alt="" className='w-8 mt-[2px] ml-[1px]'/> </h1>
<h1 className="font- text-[21px]"><IoIosArrowDown size={25} style={{

        strokeWidth: "70"
}}  /></h1>
 </nav>
  )
}

export default Navbar
