import React from 'react'
import Search from '@/assets/search.svg'
import Contact from '@/assets/login.svg'
import Heart from '@/assets/heart.svg'
import Bag from '@/assets/bag.svg'

function Nav() {
    return (
        <>
            <div className='flex gap-10 justify-center items-center mt-4 font-jost'>
                <div className='flex mr-40 text-[36px] cursor-pointer'>
                    <h1 className='font-semibold'>Sneaker</h1>
                    <span className='text-lightOrange font-bold'>.</span>
                </div>
                <div className='flex gap-14 text-[17px]'>
                    <p className='cursor-pointer'>Home</p>
                    <p className='cursor-pointer'>Shop</p>
                    <p className='cursor-pointer'>Products</p>
                    <p className='cursor-pointer'>Pages</p>
                    <p className='cursor-pointer'>Blog</p>
                    <p className='cursor-pointer'>Elements</p>
                </div>
                <div className='flex gap-10 ml-36'>
                    <img className='cursor-pointer' src={Search} alt="" />
                    <img className='cursor-pointer' src={Contact} alt="" />
                    <img className='cursor-pointer' src={Heart} alt="" />
                    <img className='cursor-pointer' src={Bag} alt="" />
                </div>
            </div>
        </>
    )
}

export default Nav