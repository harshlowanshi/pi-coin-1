import React from 'react'
import Navbar from './Navbar'
import Titel from './Titel'
import Reward from './Reward'
import Time from './Time'
import Feature from './Feature'
import About from './About'
import Fooder from './Fooder'
const Home = () => {
  return (
  <>
   <Navbar/>
<div className='px-2 py-4' >
  <Titel/>
  <Reward/>
  <Time/>
  <Feature/>
  <About/>
</div>
  <Fooder/>
  </>
  )
}

export default Home
