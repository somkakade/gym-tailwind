import React from 'react'

const Pricing = () => {
    return (
        <>
            <section className='py-16'>
                <div className="container">
                    {/* Heading */}
                    <div className='text-center'>
                        <h2 className='font-bold text-black text-3xl sm:text-4xl'>Why <span className='text-primary'>Choose</span> Us</h2>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-10'>
                        {/* Card No 1 */}
                        <div className='text-center bg-gray-200 rounded-md p-4 hover:bg-primary/20 duration-300 sm:space-y-6 sm:py-16'>
                            <div>
                                <h3 className='font-bold text-3xl'>Gold Card</h3>
                                <h4 className='text-primary text-4xl py-4'>$499</h4>
                            </div>
                            {/*  */}
                            <div className='mt-0'>
                                <p className=''>Monthly access to fitness area.</p>
                                <p className='pt-2'>Training sessions on demand.</p>
                                <p className='pt-2'>Personal trainer on demand.</p>
                                <p className='pt-2'>Live classes on demand.</p>
                            </div>
                            {/* Duration */}
                            <div>
                                <h4 className='font-bold text-black text-xl md:text-2xl'>Duration : 12 month</h4>
                            </div>
                            {/* Button */}
                            <div className='py-2'>
                                <button className='inline-block bg-primary text-white rounded-md py-2 px-6'>Learn More</button>
                            </div>
                        </div>
                        {/* Card No 2 */}
                        <div className='text-center bg-gray-200 rounded-md p-4 hover:bg-primary/20 duration-300 sm:space-y-6 sm:py-16'>
                            <div>
                                <h3 className='font-bold text-3xl'>Flexible Card</h3>
                                <h4 className='text-primary text-4xl py-4'>$999</h4>
                            </div>
                            {/*  */}
                            <div className='mt-0'>
                                <p className=''>Monthly access to fitness area.</p>
                                <p className='pt-2'>Training sessions on demand.</p>
                                <p className='pt-2'>Personal trainer on demand.</p>
                                <p className='pt-2'>Live classes on demand.</p>
                            </div>
                            {/* Duration */}
                            <div>
                                <h4 className='font-bold text-black text-xl md:text-2xl'>Duration : 12 month</h4>
                            </div>
                            {/* Button */}
                            <div className='py-2'>
                                <button className='inline-block bg-primary text-white rounded-md py-2 px-6'>Learn More</button>
                            </div>
                        </div>
                        {/* Card No 3 */}
                        <div className='text-center bg-gray-200 rounded-md p-4 hover:bg-primary/20 duration-300 sm:space-y-6 sm:py-16'>
                            <div>
                                <h3 className='font-bold text-3xl'>Platinum Card</h3>
                                <h4 className='text-primary text-4xl py-4'>$1199</h4>
                            </div>
                            {/*  */}
                            <div className='mt-0'>
                                <p className=''>Monthly access to fitness area.</p>
                                <p className='pt-2'>Training sessions on demand.</p>
                                <p className='pt-2'>Personal trainer on demand.</p>
                                <p className='pt-2'>Live classes on demand.</p>
                            </div>
                            {/* Duration */}
                            <div>
                                <h4 className='font-bold text-black text-xl md:text-2xl'>Duration : 12 month</h4>
                            </div>
                            {/* Button */}
                            <div className='py-2'>
                                <button className='inline-block bg-primary text-white rounded-md py-2 px-6'>Learn More</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Pricing