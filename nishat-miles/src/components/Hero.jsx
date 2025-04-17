import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const heroItems = [
    {
        id: 1,
        image: "/img1.webp",
    },
    {
        id: 2,
        image: "/img2.webp",
    },
    {
        id: 3,
        image: "/img3.webp",
    },
    {
        id: 4,
        image: "/4img.webp",
    },
    {
        id: 5,
        image: "/img5.webp",
    },
    {
        id: 6,
        image: "/img6.webp",
    },
]
const cartItems = [
    {
        id: 1,
        image: "/img1s.webp",
        title: "Fashion Freedom",
    },
    {
        id: 2,
        image: "/img2s.webp",
        title: "Fashion Freedom",
    },
    {
        id: 3,
        image: "/img3s.webp",
        title: "Fashion Freedom",
    },
    {
        id: 4,
        image: "/img4s.webp",
        title: "Fashion Freedom",
    },
    {
        id: 5,
        image: "/img5s.webp",
        title: "Fashion Freedom",
    },
    {
        id: 6,
        image: "/img6s.webp",
        title: "Fashion Freedom",
    },
    {
        id: 7,
        image: "/img7s.webp",
        title: "Fashion Freedom",
    },
    {
        id: 8,
        image: "/img8s.webp",
        title: "Fashion Freedom",
    },
    {
        id: 9,
        image: "/img9s.jpg",
        title: "Fashion Freedom",
    },
    {
        id: 10,
        image: "/img10s.webp",
        title: "Fashion Freedom",
    },
]

const Hero = () => {
    return (
        <>
            <Carousel
                additionalTransfrom={0}
                arrows
                autoPlaySpeed={3000}
                centerMode={false}
                className="z-0"
                containerClass="container"
                dotListClass=""
                draggable
                focusOnSelect={false}
                infinite
                itemClass=""
                keyBoardControl
                minimumTouchDrag={80}
                pauseOnHover
                renderArrowsWhenDisabled={false}
                renderButtonGroupOutside={false}
                renderDotsOutside={false}
                responsive={{
                    desktop: {
                        breakpoint: {
                            max: 3000,
                            min: 1024
                        },
                        items: 1
                    },
                    mobile: {
                        breakpoint: {
                            max: 464,
                            min: 0
                        },
                        items: 1
                    },
                    tablet: {
                        breakpoint: {
                            max: 1024,
                            min: 464
                        },
                        items: 1
                    }
                }}
                rewind={false}
                rewindWithAnimation={false}
                rtl={false}
                shouldResetAutoplay
                sliderClass=""
                slidesToSlide={1}
                swipeable
            >
                {heroItems.map((item) => (
                    <img
                        className='bg-center object-fit h-[300px] md:h-[500px]'
                        src={item.image}
                        key={item.id}
                        style={{
                            display: 'block',
                            margin: 'auto',
                            width: '100%'
                        }}
                    />
                ))}




            </Carousel>

            <div className='cart py-4 '>
                <Carousel
                    additionalTransfrom={0}
                    arrows={false}
                    autoPlay
                    autoPlaySpeed={3000}
                    centerMode={false}
                    className=""
                    containerClass="container"
                    dotListClass=""
                    draggable
                    focusOnSelect={false}
                    infinite
                    itemClass=""
                    keyBoardControl
                    minimumTouchDrag={80}
                    pauseOnHover
                    renderArrowsWhenDisabled={false}
                    renderButtonGroupOutside={false}
                    renderDotsOutside={false}
                    responsive={{
                        desktop: {
                            breakpoint: {
                                max: 3000,
                                min: 1024
                            },
                            items: 6
                        },
                        mobile: {
                            breakpoint: {
                                max: 464,
                                min: 0
                            },
                            items: 3
                        },
                        tablet: {
                            breakpoint: {
                                max: 1024,
                                min: 464
                            },
                            items: 4
                        }
                    }}
                    rewind={false}
                    rewindWithAnimation={false}
                    rtl={false}
                    shouldResetAutoplay
                    showDots
                    sliderClass=""
                    slidesToSlide={3}
                    swipeable
                >

                    {cartItems.map((item) => (
                        <div>
                            <img
                                key={item.id}
                                className='cursor-pointer border border-[#D9D9D9] rounded-full p-1 md:h-48 md:w-48 h-28 w-28'
                                src={item.image}
                                style={{
                                    display: 'block',
                                }}
                            />
                            <p className='text-center py-4 mb-4'>{item.title}</p>
                        </div>

                    ))}
                </Carousel>
            </div>
        </>
    )
}

export default Hero
