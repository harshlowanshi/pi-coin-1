import React from 'react'
import sac from '../assets/sec.png'
import img from '../assets/img.png'
import { AiFillCheckCircle, AiOutlineClockCircle } from 'react-icons/ai'

const Feature = () => {
  return (
    <div>
             <div className="grid grid-cols-2 gap-3 mt-6 text-center text-white">
          <div className=" bg-[#281534]  py-4 border border-gray-300 rounded-2xl flex items-center flex-col gap-2 "><p className='text-2xl p-3 rounded-lg  bg-[#783A8D]' ><AiFillCheckCircle className='text-[1.5em]' /></p> <h1 className=' font-bold text-md' >Birthday Program  </h1> </div>
          <div className=" bg-[#281534]  py-4 border border-gray-300 rounded-2xl flex items-center gap-2 flex-col"><p className='text-2xl p-3 rounded-lg  bg-[#783A8D]' ><AiOutlineClockCircle  className='text-[1.5em]'/></p> <h1 className=' font-bold text-md' >Receive in 24h</h1>  </div>
          <div className=" bg-[#281534]  py-4 border border-gray-300 rounded-2xl flex items-center gap-2 flex-col"><img src={sac} alt="" className='w-[4.3em]' /> <h1 className=' font-bold text-md' >Safe & Secure</h1>  </div>
          <div className=" bg-[#281534] py-4 border border-gray-300 rounded-2xl flex items-center gap-2 flex-col"><img src={img} alt="" className='w-[4.3em]' />  <h1 className=' font-bold text-md' >500000+ Participants</h1>  </div>
        </div>
    </div>
  )
}

export default Feature
