import React from 'react'
import GetStartedbanner from "../../../src/assets/dumbell.jpg";
import GoogleStore from "../../../src/assets/website/play_store.png";
import AppStore from "../../../src/assets/website/app_store.png";

const GetStartedBanner = {
    backgroundImage: `url('${GetStartedbanner}')`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    width: '100%',
    height: '100%',
}


const GetStarted = () => {
    return (
        <>
            <section className='py-16'>
                <div className="container">
                    <div style={GetStartedBanner} className='py-10 min-h-[400px] rounded-xl sm:flex sm:justify-end sm:items-center'>
                        <div className='flex items-center'>
                            <div className='max-w-[650px] mx-auto pt-14 sm:pt-0'>
                                <div>
                                    <h3 className='text-white font-bold text-center text-3xl sm:text-4xl'>Download The APP</h3>
                                    <p className='text-center px-2 sm:px-20 pt-4 text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique magnam harum accusantium odit?</p>
                                </div>
                                <div className='flex gap-6 justify-center items-center pt-7'>
                                    <div>
                                        <img src={GoogleStore} alt="" className='w-40' />
                                    </div>
                                    <div>
                                        <img src={AppStore} alt="" className='w-40' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default GetStarted