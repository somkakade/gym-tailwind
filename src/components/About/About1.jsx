import React from 'react'
import About2Banner from "../../../src/assets/pushups.png";

const About1 = () => {
  return (
    <>
        <div>
            <div className="container py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className='sm:p-16'>
                        <div className='flex items-center gap-4'>
                            <div>
                                <p className='font-bold text-primary text-4xl md:text-7xl'>01</p>
                            </div>
                            <div>
                                <p className='text-primary'>Global Fitness</p>
                                <p className='font-bold text-2xl md:text-4xl'>About us</p>
                            </div>
                        </div>
                        {/* Decription */}
                        <div className='py-4'>
                            <p className='py-4'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente totam, eligendi corporis voluptatibus fugit animi.</p>
                        </div>
                        {/* Button */}
                        <div>
                            <button className='outline-btn'>Get Started</button>
                        </div>
                    </div>
                    <div className='order-first md:order-2'>
                        <img src={About2Banner} alt=""  className='max-h-[400px] drop-shadow-md mx-auto' />
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default About1