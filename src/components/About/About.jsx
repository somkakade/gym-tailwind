import AboutOne from "../../assets/banner.png";

const About = () => {
    return (
        <>
            <div className="bg-slate-100">
                <div className="container py-16">
                    <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 place-items-center'>
                        <div>
                            <img src={AboutOne} alt="" className="drop-shadow-md max-h-[400px] mx-auto" />
                        </div>
                        <div className="sm:p-16">
                            {/* Heading Content */}
                            <div className="flex gap-4 items-center">
                                <div className="font-bold text-primary text-4xl md:text-7xl">01</div>
                                <div>
                                    <p className="text-primary">Global Fitness</p>
                                    <p className="font-bold text-2xl sm:text-4xl">About us</p>
                                </div>
                            </div>
                            {/* Description */}
                            <div className="py-4">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis reiciendis atque laboriosam, nostrum iste architecto.</p>
                            </div>
                            {/* Button */}
                            <div>
                                <button className="outline-btn">Get Started</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About