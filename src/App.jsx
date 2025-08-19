import React from 'react'
import Home from './component/Home'
import Wallet from './pages/Wallet'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { PiProvider } from './pi-coin/PiContext'
import LastPage from './pages/LastPage'

const App = () => {
  return (
 <PiProvider>
     <BrowserRouter>
       <div className='"min-h-screen bg-[#26143A]  to-purple-900 max-w-md mx-auto'>
<Routes>
  <Route path="" element={<Home/>} />
  <Route path="/wallet" element={<Wallet/>} />
  <Route path="/dashboard" element={<LastPage/>} />
</Routes>
    </div>
    </BrowserRouter>
 </PiProvider>
  )
}

export default App
