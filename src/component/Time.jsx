import React, { useEffect, useState } from 'react'
import right from '../assets/right.img.png'
import img2 from '../assets/img2.png'
import img3 from '../assets/img3.png'
import { useNavigate } from 'react-router-dom'
const Time = () => {

    const [timeLeft, setTimeLeft] = useState(18 * 3600 + 45 * 60 + 56);

     const navigate = useNavigate ();

  const handleClaim = () => {
    navigate("/wallet")
  };

  useEffect(() => {
    if (timeLeft <= 0) return;
    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  const formatTime = (seconds) => {
    const h = String(Math.floor(seconds / 3600)).padStart(2, "0");
    const m = String(Math.floor((seconds % 3600) / 60)).padStart(2, "0");
    const s = String(seconds % 60).padStart(2, "0");
    return `${h}:${m}:${s}`;
  };

  return (
    <div className='flex flex-col '>
        <div className="flex items-center justify-center">
                <div className="mt-4 space-y-2 text-sm  flex flex-col  items-start text-white">
            <div className='text-lg font-semibold flex items-center justify-start gap-2' ><img src={img2} alt="" className='w-[1.1em] ml-1' /> <p>Time Remaining:</p> {formatTime(timeLeft)}</div>
            <div className='text-lg font-semibold flex items-center justify-start gap-2' > <img src={right} alt="" className='w-6' /> <p>Condition: KYC Successfully Passed</p></div>
            <div className='text-lg font-semibold flex items-center justify-start gap-2 ' ><img src={img3} alt="" className='w-6'/><p> Remaining Quantity: 3024/6000</p></div>
          </div>
        </div>

          <div className="my-6 text-center">
            <a onClick={handleClaim}  className="bg-[#783A8D]  cursor-pointer  px-12 py-3 rounded-lg  text-white font-bold shadow">
              CLAIM 314 PI NOW
            </a>
          </div>
        </div>
    
  )
}

export default Time
