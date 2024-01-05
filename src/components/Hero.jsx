import React from 'react'
import Nav from './Nav'
import myImg from '@/assets/Group.png'

function Hero() {
  return (
    <>
      <div>
        <Nav />
      </div>
      <div className='flex justify-center items-center font-jost'>
        <div>
          <p className='ml-60 font-medium'>Sneaker Collection</p>
          <h1 className='text-[56px] ml-60 font-bold'>GOOD SHOES<br/> TAKE YOU<br/> GOOD PLACES</h1>
          <div className='ml-64'>
            <button className='text-[16px] mt-10 border-2 pt-2 pr-6 pb-2 pl-6 rounded-[4px] font-medium'>Shop Now</button>
          </div>
        </div>
        <div>
          <img src={myImg} alt="" />
        </div>
      </div>
    </>
  )
}

export default Hero