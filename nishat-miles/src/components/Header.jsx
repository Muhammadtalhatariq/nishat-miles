
import React, { useEffect } from 'react'
import { useState } from 'react';
import { TfiSearch } from "react-icons/tfi";
import { CiUser } from "react-icons/ci";
import { CiDeliveryTruck } from "react-icons/ci";
import { SlBasket } from "react-icons/sl";
import TopHeader from './TopHeader';
import Navbar from './Navbar';
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { GoPlus } from "react-icons/go";
import { CiShoppingTag } from "react-icons/ci";
import { IoCloseOutline } from "react-icons/io5";
import { FiPhone } from "react-icons/fi";
import { IoMailOutline } from "react-icons/io5";

const nevItems = [
    {
        name: "WOMEN",
        path: "#Women",
    },
    {
        name: "LUXURY",
        path: "#Luxury",
    },
    {
        name: "MEN",
        path: "#men",
    },
    {
        name: "HOME",
        path: "#home",
    },
    {
        name: "ACCESSORIES",
        path: "#accessories",
    },
];

const Header = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [stick, setstick] = useState(false);

    useEffect(() => {
        const handleScrool = () => {
            if (window.scrollY > 0) {
                setstick(true);
            } else {
                setstick(false);
            }
        };
        window.addEventListener("scroll", handleScrool);

        return () => {
            window.removeEventListener("scroll", handleScrool);
        };
    }, []);


    const handleToggle = () => {
        setIsOpen(true);
    };
    const handleClose = () => {
        setIsOpen(false);
    };

    return (
        <>

            <TopHeader />
            <div>
                <div className={`flex items-center md:flex-col justify-between p-2 z-80 ${stick ? "fixed top-0 duration-500 ease-in" : ""} bg-white w-full `}>
                    {/* mobile view  */}
                    <div className='mbl-nav relative '>
                        <div>
                            <HiOutlineMenuAlt1 onClick={handleToggle} size={30} className='text-black text-2xl md:hidden' />
                        </div>
                        {isOpen && (
                            <div className='w-80 absolute fixed bg-white -top-24 -left-0 bottom-0 z-50 flex flex-col items-center justify-center'>
                                <div className='flex items-center justify-between w-full'>
                                    <div className='bg-[#CCCCCC] w-full p-3'>
                                        <h2 className='font-semibold text-xl text-center'>MENU</h2>
                                    </div>
                                    <div className='absolute fixed -top-0 right-2 bg-black p-[14px]'>
                                        <IoCloseOutline className='text-white ' onClick={handleClose} size={25} />
                                    </div>
                                </div>
                                <div className='Flex flex-row justify-between items-center w-full bg-white'>
                                    <div className='flex items-center justify-between border-b border-[#D9D9D9]'>
                                        <div className='flex gap-2 items-center px-2 py-4'>  ,
                                            <CiShoppingTag size={20} />
                                            <a href="#">NEW IN</a>
                                        </div>
                                        <GoPlus className='mr-8' size={20} />
                                    </div>

                                    <ul>
                                        {nevItems.map((item) => (
                                            <li className='flex items-center justify-between  border-b border-[#D9D9D9]' key={item.path}>
                                                <a className='text-black hover:text-[#78909C] p-4' to={item.path}>{item.name}</a>
                                                <GoPlus className='mr-8' size={20} />
                                            </li>
                                        ))}
                                    </ul>
                                    <div className='flex items-center justify-between border-b border-[#D9D9D9]'>
                                        <div className='flex gap-2 items-center px-2 py-4'>
                                            <CiUser className='text-black hover:text-[#78909C] text-lg hover:text-2xl duration-500 ' />    Login / Register
                                        </div>
                                    </div>
                                    <div className='flex flex-col p-4'>
                                        <p className='py-2'>Need help?</p>
                                        <div>
                                            <p className='flex items-center'> <span className='pr-3'> <FiPhone size={14} /></span> 042-38103311</p>
                                            <p className='flex items-center'> <span className='pr-3'> <IoMailOutline size={14} /></span> nishatonline@nishatmills.com</p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        )}
                    </div>

                    <div className='flex items-center justify-between w-full px-2 '>
                        <div className='md:w-1/2 flex items-center justify-end md:ml-20 ml-10'>
                            <div className='md:pl-64 pl-10 '>
                                <img className='h-10 cursor-pointer' src="/logo.webp" alt="logo" />
                            </div>
                        </div>
                        <div className='icons flex items-center justify-between md:px-3 px-3 gap-3'>
                            <TfiSearch className='text-black  hover:text-[#78909C] text-xl hover:text-2xl duration-500 cursor-pointer' />
                            <CiUser className='text-black hidden md:flex hover:text-[#78909C] text-xl hover:text-2xl duration-500  cursor-pointer' />
                            <CiDeliveryTruck className='text-black  hidden md:flex hover:text-[#78909C] text-xl hover:text-2xl duration-500  cursor-pointer ' />
                            <div className='relative'>
                                <span className='absolute -top-1 -right-2 bg-red-500 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs '>0</span>
                                <SlBasket className='text-black hover:text-[#78909C] text-xl hover:text-2xl duration-500  cursor-pointer' />
                            </div>
                        </div>
                    </div>
                    <div className='border-b hidden md:flex w-full border-[#D9D9D9] mx-4 pt-4'></div>
                    <div className='hidden md:flex'>
                    <Navbar />
                    </div>
                </div>
                <div>
                    
                </div>
              
                <div>
                </div>

            </div>

        </>
    )
}

export default Header
