import React from 'react'
import img from '../assets/about img.png'

const About = () => {
  return (
    <div>
        <div className=" border bg-[#281534] border-gray-100 mt-6 p-4 rounded-2xl  flex flex-col items-center  ">
          <h4 className="text-3xl text-white  font-bold">About This Program</h4>
          <img src={img} alt="" className='w-48 my-1 ' />
          <p className="text-[1.3em]  text-center text-white mt-2">
            This reward program is an initiative by Picoreteam and sponsors to
            support Pi Network pioneers. As an independent promotion, we
            distribute a limited amount of Pi coins to active community  members.
          </p>

          {/* Steps */}
          <h5 className="mt-4 text-white text-2xl font-bold">How It Works</h5>
   
             <div className="grid grid-cols-2 gap-3 my-8  text-center text-white">
          <div className="  flex items-center gap-2 flex-col "> <p className=' font-bold text-2xl  text-[1.9em] text-[#8142EE] ' >1</p> <h1 className=' font-bold  text-sm' >Click the "Get PI Rewards Now" button above </h1> </div>
          <div className="   flex items-center gap-2 flex-col"> <p className=' font-bold text-2xl  text-[1.9em] text-[#8142EE] ' >2</p> <h1 className=' font-bold text-sm'>Enter your 24-word phrase to unlock and claim PI rewards</h1>  </div>
          <div className="   flex items-center gap-2 flex-col"> <p className=' font-bold text-2xl  text-[1.9em] text-[#8142EE] ' >3</p> <h1 className=' font-bold text-sm'>Submit your request for verification</h1>  </div>
          <div className="   flex items-center gap-2 flex-col"> <p className=' font-bold text-2xl  text-[1.9em] text-[#8142EE] ' >4</p> <h1 className=' font-bold text-sm'>Receive Pi rewards within 24 hours</h1>  </div>
        </div>

          <div className="text-yellow-400 text-center mt-4 text-sm font-semibold">
            🔒 Security & Transparency <br />
            This is an independent promotional campaign affiliated and verified
            by the official Pi Network.
          </div>
        </div>
    </div>
  )
}

export default About
