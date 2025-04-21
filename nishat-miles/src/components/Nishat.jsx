import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { GrSupport } from "react-icons/gr";
import { PiShippingContainerThin } from "react-icons/pi";
import { IoHelpBuoyOutline } from "react-icons/io5";
import { BsCashCoin } from "react-icons/bs";

const nishatItems = [
    {
        id: 1,
        image: <GrSupport size={30} />,
        title: "Track Your Order",
        dest: "Click here to find your nearby store"
    },
    {
        id: 2,
        image: <PiShippingContainerThin size={30} />,
        title: "Store Locator",
        dest: "Click here to find your nearby store"
    },
    {
        id: 3,
        image: <IoHelpBuoyOutline size={30} />,
        title: "SUPPORT 24/7",
        dest: "Contact us 24 hours a day, 7 days a week"
    },
    {
        id: 4,
        image: <BsCashCoin size={30} />,
        title: "Payment Methods",
        dest: "COD, Credit Card: Visa, Master Card"
    }
]

const Nishat = () => {
    return (
        <>
            <div>
                <div className='py-4 font-mont '>
                    <div className=''>
                        {/* heading  */}
                        <div className='flex items-center justify-center gap-2'>
                            <div className=''>  <img className='size-9 pt-1' src="/instra.png" alt="" /></div>
                            <h1 className='font-semibold text-4xl hover:text-[#FFBC70]'>#nishat</h1>
                        </div>

                        <div className='mbl-view md:pt-20 pt-6 pb-4 flex flex-weap md:hidden'>
                            <Carousel
                                additionalTransfrom={0}
                                arrows={false}
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
                                        items: 4
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
                                        items: 4
                                    }
                                }}
                                rewind={false}
                                rewindWithAnimation={false}
                                rtl={false}
                                sliderClass=""
                                slidesToSlide={1}
                                swipeable
                                showDots
                            >
                                {nishatItems.map((item) => (
                                    <div className='px-4 py-6 '>
                                        <div className='flex items-center py-4' >
                                            <div
                                                className='rounded-full p-1 size-10'
                                            >{item.image}</div>
                                            <div >
                                                <h2 className='font-semibold'>{item.title}</h2>
                                                <a className='text-center py-2'>{item.dest}</a>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </Carousel>
                        </div>

                        <div className='md:pt-8 pt-6 md:flex hidden flex-weap'>
                            <Carousel
                                additionalTransfrom={0}
                                arrows={false}
                                autoPlaySpeed={3000}
                                centerMode={false}
                                className=""
                                containerClass="container"
                                dotListClass=""
                                draggable={false}
                                focusOnSelect={false}
                                infinite={false}
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
                                        items: 4
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
                                        items: 4
                                    }
                                }}
                                rewind={false}
                                rewindWithAnimation={false}
                                rtl={false}
                                sliderClass=""
                                slidesToSlide={1}
                            >
                                {nishatItems.map((item) => (
                                    <div className='px-4'>
                                        <div className='flex items-center justify-center pt-8 pb-4' >
                                            <div className='flex items-center justify-center size-16'>
                                                <div className=' mb-6 text-[#8F8F8F]'>
                                                    {item.image}
                                                </div>
                                            </div>
                                            <div>
                                                <h2 className='font-semibold'>{item.title}</h2>
                                                <a className='text-center text-[#8F8F8F]'>{item.dest}</a>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </Carousel>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Nishat
