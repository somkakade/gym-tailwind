import React from 'react'
import AboutOne from "../../assets/banner.png";

const About2 = () => {
  return (
    <>
        <div className='py-16 bg-slate-100'>
            <div className="container">
                <div className='grid grid-cols-1 md:grid-cols-2 place-items-center'>
                    <div>
                        <img src={AboutOne} alt="" className='max-h-[400px] mx-auto' />
                    </div>
                    <div className='sm:p-16'>
                        <div className='flex items-center gap-4'>
                            <div>
                                <p className='font-bold text-primary text-4xl md:text-7xl'>01</p>
                            </div>
                            <div>
                                <p className='text-primary'>Global Fitness</p>
                                <p className='font-bold text-2xl sm:text-4xl'>About us</p>
                            </div>
                        </div>
                        {/* Description */}
                        <div className='py-4'>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia optio adipisci veniam pariatur recusandae molestias?</p>
                        </div>
                        {/* Button */}
                        <div>
                            <button className='outline-btn'>Get Started</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default About2