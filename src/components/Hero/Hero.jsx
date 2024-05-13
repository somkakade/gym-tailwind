import React from 'react'
import BannrImage from '../../../src/assets/hero.jpg';

const BgStyle={
    backgroundImage:`url('${BannrImage}')`,
    backgroundRepeat:'no-repeat',
    backgroundSize:'cover',
    backgroundPosition:'center',
    height:'100%',
    width:'100%',
}
const Hero = () => {
  return (
    <>
        <div className='w-full bg-primary' style={BgStyle}>
            <div className="container min-h-[550px] flex items-center bg-white/70">
                    <div className='w-full md:w-[550px] mx-auto text-center'>
                      <p className='text-primary'>Start Your Fitness Journey</p>
                      <h1 className='font-bold text-4xl md:text-7xl'>Your Fitness Journey Begins!</h1>
                      <p className='py-4'>“The body achieves what the mind believes.”</p>
                      <button className='primary-btn'>get started</button>
                    </div>
            </div>
        </div>
    </>
  )
}

export default Hero