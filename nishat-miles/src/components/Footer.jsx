import React, { useState } from 'react'
import { SlLocationPin } from "react-icons/sl";
import { TfiEmail } from "react-icons/tfi";
import { FiPhone } from "react-icons/fi";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { GoPlus } from "react-icons/go";
import { FiMinus } from "react-icons/fi";
const navitems = [
    {
        name: "Blog",
        path: "#blog"
    },
    {
        name: "About Us",
        link: "#aboutus"
    },
    {
        name: "Catalogues",
        link: "#catalogues"
    },
    {
        name: "Privacy Policy",
        link: "#PrivacyPolicy"
    },
    {
        name: "Terms & Conditions",
        link: "#termszconditions"
    },
]
const serviesitems = [
    {
        name: "FAQs",
        path: "#faq"
    },
    {
        name: "Order Tracking",
        link: "#ordertracking"
    },
    {
        name: "Store Locator",
        link: "#storelocator"
    },
    {
        name: "Privacy Policy",
        link: "#PrivacyPolicy"
    },
    {
        name: "Contact Us",
        link: "#contactus"
    },
]

const Footer = () => {
    const [isOpencontact, setIsOpencontct] = useState(false);
    const [isOpeninfo, setIsOpeninfo] = useState(false);
    const [isOpenservies, setisOpenservies] = useState(false)
    const [isOpennews, setIsOpennews] = useState(false)
    const handleOpennews = () => {
        setIsOpennews(true);
    }
    const handleClosenews = () => {
        setIsOpennews(false);
    }
    const handleOpeninfo = () => {
        setIsOpeninfo(true);
    }
    const handleCloseinfo = () => {
        setIsOpeninfo(false);
    }
    const handleOpenservices = () => {
        setisOpenservies(true);
    }
    const handleCloseservices = () => {
        setisOpenservies(false);
    }
    const handleOpencontact = () => {
        setIsOpencontct(true);
    };
    const handleClosecontact = () => {
        setIsOpencontct(false);
    };
    return (
        <>
            <div className='footer bg-[#F6F6F8] py-6'>
                <div className='flex hidden md:flex flex-col md:flex-row w-full px-4'>
                    <div className='contact  md:w-1/4 px-4 '>
                        <h1 className='font-bold text-xl py-2'> Contact us</h1>
                        <div className='flex flex-col space-y-4'>
                            <div className='flex gap-2 items-center'>
                                <SlLocationPin size={25} />   <p> 21 Km Ferozpur Road Lahore Pakistan.</p>
                            </div>
                            <div className='flex gap-2 items-center'>
                                <TfiEmail size={20} />     <p>nishatonline@nishatmills.com</p>
                            </div>
                            <div className='flex gap-2 items-center'>
                                <FiPhone size={20} /> <p>+92 42 111 647 428</p>
                            </div>
                        </div>
                    </div>
                    <div className='information md:w-1/4 px-6'>
                        <h1 className='font-bold text-xl py-2'>Information </h1>
                        <ul>
                            {navitems.map((item, index) => (
                                <li key={index} className='py-1 cursior-pointer '>
                                    <a href={item.link}>{item.name}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className='information md:w-1/4 px-6 '>
                        <h1 className='font-bold text-xl py-2'>Customer Services </h1>
                        <ul>
                            {serviesitems.map((item, index) => (
                                <li key={index} className='py-1 cursior-pointer '>
                                    <a href={item.link}>{item.name}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className='latest-newa md:w-2/4 md:px-10'>
                        <h1 className='font-bold  text-xl py-2'>Newsletter Signup </h1>
                        <p className='py-4'>Subscribe to our newsletter and get latest updates.</p>
                        <div className='border border-black py-[2px] flex gap-2 md:w-96'>
                            <input className='outline-none w-68 px-4' type="text" placeholder='your email address' /><button className='text-white bg-black py-2 px-4 cursor-pointer'>subscribe</button>
                        </div>
                        <div className=' icons flex gap-4 items-center py-4'>
                            <FaFacebookF size={25} />
                            <FaInstagram size={25} />
                            <FaYoutube size={25} />
                        </div>
                    </div>
                </div>
                {/* mbl view */}
                <div className='flex md:hidden flex flex-col md:flex-row w-full px-4'>
                    <div className='contact md:w-1/4 px-4'>
                        <div className='flex items-center justify-between'>
                            <h1 className='font-bold text-xl py-2'> Get In Touch</h1>  <span> {isOpencontact ? <FiMinus onClick={handleClosecontact} /> : <GoPlus onClick={handleOpencontact} />} </span>
                        </div>
                        {isOpencontact && (
                            <div className='flex flex-col space-y-4'>
                                <div className='flex gap-2 items-center'>
                                    <SlLocationPin size={25} />   <p> 21 Km Ferozpur Road Lahore Pakistan.</p>
                                </div>
                                <div className='flex gap-2 items-center'>
                                    <TfiEmail size={20} />     <p>nishatonline@nishatmills.com</p>
                                </div>
                                <div className='flex gap-2 items-center'>
                                    <FiPhone size={20} /> <p>+92 42 111 647 428</p>
                                </div>
                            </div>
                        )}
                    </div>
                    <div className='information md:w-1/4 px-4'>
                        <div className='flex items-center justify-between'>
                            <h1 className='font-bold text-xl py-2'>Information </h1>  <span> {isOpeninfo ? <FiMinus onClick={handleCloseinfo} /> : <GoPlus onClick={handleOpeninfo} />} </span>
                        </div>
                        {isOpeninfo && (
                            <ul>
                                {navitems.map((item, index) => (
                                    <li key={index} className='py-1 cursior-pointer '>
                                        <a href={item.link}>{item.name}</a>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                    <div className='servies md:w-1/4 px-4 '>
                        <div className='flex items-center justify-between'>
                            <h1 className='font-bold text-xl py-2'>Customer Services </h1>  <span> {isOpenservies ? <FiMinus onClick={handleCloseservices} /> : <GoPlus onClick={handleOpenservices} />} </span>
                        </div>
                        {isOpenservies && (
                            <ul>
                                {serviesitems.map((item, index) => (
                                    <li key={index} className='py-1 cursior-pointer '>
                                        <a href={item.link}>{item.name}</a>
                                    </li>
                                ))}
                            </ul>)}
                    </div>
                    <div className='latest-news md:w-2/4 px-4 md:px-10'>

                        <div className='flex items-center justify-between'>
                            <h1 className='font-bold text-xl py-2'>Newsletter Signup </h1>  <span> {isOpennews ? <FiMinus onClick={handleClosenews} /> : <GoPlus onClick={handleOpennews} />} </span>
                        </div>
                        {isOpennews && (
                            <div>
                                <p className='py-4'>Subscribe to our newsletter and get latest updates.</p>
                                <div className='border border-black py-[2px] flex flex-col gap-2 md:w-96'>
                                    <input className='outline-none w-68 px-4 text-center' type="text" placeholder='your email address' /><button className='text-white bg-black py-2 px-4 cursor-pointer'>subscribe</button>
                                </div>
                                <div className=' icons flex gap-4 items-center py-4'>
                                    <FaFacebookF size={25} />
                                    <FaInstagram size={25} />
                                    <FaYoutube size={25} />
                                </div>
                            </div>
                        )}

                    </div>
                </div>
            </div>
            <div>
                <div className='p-6 flex flex-col md:flex-row justify-between items-center w-full text-sm md:px-10'>
                    <p>Copyright © 2025 Nishat. All rights reserved. </p>
                    <div>
                        <div className='flex gap-4 items-center py-4 md:pr-32'>
                            <img src="/ft-icon.svg" alt="" />
                            <img src="/visa.svg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer
