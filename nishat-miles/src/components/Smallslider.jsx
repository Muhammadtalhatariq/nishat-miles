import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const cartItems = [
    {
        id: 1,
        image: "/img1s.webp",
        title: "Shop By Concept",
    },
    {
        id: 2,
        image: "/img2s.webp",
        title: "Sunlit Styles",
    },
    {
        id: 3,
        image: "/img3s.webp",
        title: "Ammi Aur Mei",
    },
    {
        id: 4,
        image: "/img4s.webp",
        title: "Summer Pret Picks",
    },
    {
        id: 5,
        image: "/img5s.webp",
        title: "Summer Dream Luxury Pret ",
    },
    {
        id: 6,
        image: "/img6s.webp",
        title: "Fashion Freedom",
    },
    {
        id: 7,
        image: "/img7s.webp",
        title: "Summer Unstitched Looks",
    },
    {
        id: 8,
        image: "/img8s.webp",
        title: "Luxury Unstitched",
    },
    {
        id: 9,
        image: "/img9s.jpg",
        title: " Men's Summer Wardrobe",
    },
    {
        id: 10,
        image: "/img10s.webp",
        title: "Wardrobe Add-ons",
    },
]

const Smallslider = () => {
    return (
        <>
            <div className='py-4 font-mont'>
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
                        <div className='flex flex-col items-center justify-center' key={item.id}>
                            <img
                                key={item.id}
                                className='cursor-pointer border border-[#D9D9D9] rounded-full p-1 md:h-48 md:w-48 h-28 w-28'
                                src={item.image}
                                style={{
                                    display: 'block',
                                }}
                            />
                            <p className='text-center py-4 mb-4 px-2 text-sm font-medium'>{item.title}</p>
                        </div>

                    ))}
                </Carousel>
            </div>
        </>
    )
}

export default Smallslider
