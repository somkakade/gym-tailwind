
import Slider from "react-slick";
// import SlideImg from "../../../src/assets/website/slide.jpg"

// const testiminialsData=[
//     {
//         name:`John Morgon`,
//         img:`/src/assets/website/slide.jpg`,
//         review:`Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.`,
//     },
//     {
//         name:`Sachin`,
//         img: `/src/assets/website/slide.jpg`,
//         review:`Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.`,
//     },
//     {
//         name:`Pratik`,
//         img:`/src/assets/website/slide.jpg`,
//         review:`Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.`
//     },
//     {
//         name:`Kishor`,
//         img:`/src/assets/website/slide.jpg`,
//         review:`Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.`,
//     },
//     {
//         name:`Rupesh`,
//         img:`/src/assets/website/slide.jpg`,
//         review:`Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.`,
//     },
//     {
//         name:`Someshwar`,
//         img:`/src/assets/website/slide.jpg`,
//         review:`Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.`
//     }
//     ,
//     {
//         name:`Akash`,
//         img:`/src/assets/website/slide.jpg`,
//         review:`Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.`
//     }
//     ,
//     {
//         name:`Yash`,
//         img:`/src/assets/website/slide.jpg`,
//         review:`Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.`
//     }
//     ,
//     {
//         name:`Dadaso`,
//         img:`/src/assets/website/slide.jpg`,
//         review:`Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.`
//     }
//     ,
//     {
//         name:`Vitthal`,
//         img:`/src/assets/website/slide.jpg`,
//         review:`Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.`
//     }
// ]
// console.log(testiminialsData);

const Testimonial = () => {
    const settings = {
        dots:false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
    };
    console.log(settings);

    const testiminialsData = [
        {
            name: `John Morgon`,
            img: `/src/assets/website/slide.jpg`,
            review: `Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.`,
        },
        {
            name: `Sachin`,
            img: `/src/assets/website/slide.jpg`,
            review: `Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.`,
        },
        {
            name: `Pratik`,
            img: `/src/assets/website/slide.jpg`,
            review: `Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.`
        },
        {
            name: `Kishor`,
            img: `/src/assets/website/slide.jpg`,
            review: `Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.`,
        },
        {
            name: `Rupesh`,
            img: `/src/assets/website/slide.jpg`,
            review: `Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.`,
        },
        {
            name: `Someshwar`,
            img: `/src/assets/website/slide.jpg`,
            review: `Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.`
        },
        {
            name: `Akash`,
            img: `/src/assets/website/slide.jpg`,
            review: `Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.`
        },
        {
            name: `Yash`,
            img: `/src/assets/website/slide.jpg`,
            review: `Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.`
        },
        {
            name: `Dadaso`,
            img: `/src/assets/website/slide.jpg`,
            review: `Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.`
        },
        {
            name: `Vitthal`,
            img: `/src/assets/website/slide.jpg`,
            review: `Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.`
        }
    ]
    return (
        <>
            <section className='py-16 testimonials__wrapper'>
                <div className="container">
                    <div className='pb-[50px]'>
                        <h2 className='font-bold text-black text-2xl md:text-4xl text-center'>Testimonials</h2>
                    </div>
                    {/* Content */} 
                    <div className="slider-container">
                        <Slider {...settings}>
                            {testiminialsData.map((data) => (
                                <>
                                    <div className="shadow-lg rounded-xl text-center min-h-[200px]  bg-primary/20">
                                        <div className="">
                                            <div className="text-center flex justify-center rounded-t-xl bg-primary">
                                                <img src={data.img} alt="" className="rounded-full" />
                                            </div>
                                            <div className="py-5">
                                                <p className="p-3">{data.review}</p>
                                                <p className="font-semibold text-xl md:text-2xl text-black">{data.name}</p>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            ))}
                        </Slider>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Testimonial