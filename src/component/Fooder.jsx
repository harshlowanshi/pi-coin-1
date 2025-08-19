import React from 'react'
import pi from '../assets/pi.img.png'
import block from '../assets/block.png'
const Fooder = () => {
  return (
    <div className='pb-4' >
            <div className=" my-2 p-4 ">
          <h4 className="font-bold text-white text-center text-2xl mb-3">Supported By</h4>
          <div className="grid grid-cols-2 gap-3 text-center text-sm">
            <div className=" bg-[#281534] border border-gray-100 py-2 px-3 text-white flex flex-col items-center   m-1   p-3 rounded-xl"><svg xmlns="http://www.w3.org/2000/svg" width="40%" height="51%" preserveAspectRatio="none" viewBox="0 0 24 24" className="text-center" fill="rgba(129, 66, 238, 1)"> <path d="M16,11.78L20.24,4.45L21.97,5.45L16.74,14.5L10.23,10.75L5.46,19H22V21H2V3H4V17.54L9.5,8L16,11.78Z"></path> </svg> <h1 className=' text-lg font-bold'  >TechFi</h1>Technical support</div>
            <div className=" bg-[#281534] border border-gray-100 py-2 px-3 text-white flex flex-col   items-center    m-1   p-3 rounded-xl"><img src= {block} alt="" className='w-18' /> <h1 className=' text-lg font-bold'  >OKX</h1>Blockchain partner</div>
            <div className=" bg-[#281534] border border-gray-100 py-2 px-3 text-white flex flex-col  items-center  m-1   p-3 rounded-xl"><svg xmlns="http://www.w3.org/2000/svg" width="40%" height="51%" preserveAspectRatio="none" viewBox="0 0 1920 1896.0833"  className="" fill="rgba(129, 66, 238, 1)"> <path d="M1760 128q66 0 113 47t47 113v1216q0 66-47 113t-113 47H160q-66 0-113-47T0 1504V288q0-66 47-113t113-47h1600zM160 256q-13 0-22.5 9.5T128 288v224h1664V288q0-13-9.5-22.5T1760 256H160zm1600 1280q13 0 22.5-9.5t9.5-22.5V896H128v608q0 13 9.5 22.5t22.5 9.5h1600zM256 1408v-128h256v128H256zm384 0v-128h384v128H640z"></path> </svg> <h1 className=' text-lg font-bold'  >CryptoPlus</h1>Payment gateway</div>
            <div className=" bg-[#281534] border border-gray-100 py-2 px-3 text-white flex flex-col  items-center   m-1   p-3 rounded-xl"><img src= {pi} alt="" className='w-16' /><h1 className=' text-lg font-bold'  >PiCommunity</h1>Community support</div>
          </div>
        </div>

        {/* Footer */}
        <h1 className="text-center text-lg  text-white px-1 my-1  ">
          This is an independent promotional program verified by the official Pi
          Network.</h1> 
          <p className='text-gray-400 text-center ' >© 2025 Pi Network Reward Program. All rights reserved.</p>
        
      </div>
    
  )
}

export default Fooder
