import React from 'react'

const CallToAction = () => {
  return (
    <>
        <div className='py-16'>
            <div className="container ">
                <div className='flex flex-col md:flex-row items-center bg-gray-100 p-5'>
                    <div className='w-full md:w-2/3'>
                        <div>
                            <h2 className='font-bold text-black text-3xl md:text-4xl'><span className='text-primary'>Sweat now, shine later.</span> Your body is a reflection of your lifestyle choices.</h2>
                        </div>
                    </div>
                    <div className='w-full md:w-1/2 text-center'>
                        <div className='pt-10 md:pt-0'>
                            <button className='inline-block bg-primary text-white py-2 px-6 text-lg uppercase'>Contact</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default CallToAction