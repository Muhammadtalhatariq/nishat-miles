import React from 'react'
import { useState } from 'react';
import { TfiSearch } from "react-icons/tfi";
import { CiUser } from "react-icons/ci";
import { TbTruckDelivery } from "react-icons/tb";
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
                <div className='flex items-center justify-between p-4 '>
                    {/* mobile view  */}
                    <div className='mbl-nav relative'>
                        <HiOutlineMenuAlt1 onClick={handleToggle} size={30} className='text-black text-2xl md:hidden' />
                        {isOpen && (
                            <div className='w-80 absolute -top-20 -left-4 z-50 flex flex-col items-center justify-center ease-in-out duration-1000'>
                                <div className='flex items-center justify-between w-full'>
                                    <div className='bg-[#CCCCCC] w-full p-3'>
                                        <h2 className='font-semibold text-xl text-center'>MENU</h2>
                                    </div>
                                    <div className='absolute -top-0 -right-10 bg-black p-[14px]'>
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
                                            <p className='flex items-center'> <span className='pr-3'> <FiPhone size={14}/></span> 042-38103311</p>
                                            <p className='flex items-center'> <span className='pr-3'> <IoMailOutline size={14}/></span> nishatonline@nishatmills.com</p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        )}
                    </div>

                    <div className='flex w-full justify-center items-center'>
                        <img className='md:pl-40 pl-10 md:h-10 h-10 ' src="/logo.webp" alt="" />
                    </div>
                    <div className='icons flex items-center justify-between md:px-6 px-2 gap-2'>
                        <TfiSearch className='text-black  hover:text-[#78909C] text-xl hover:text-2xl duration-500 ' />
                        <CiUser className='text-black hidden md:flex hover:text-[#78909C] text-xl hover:text-2xl duration-500 ' />
                        <TbTruckDelivery className='text-black  hidden md:flex hover:text-[#78909C] text-xl hover:text-2xl duration-500 ' />
                        <div className='relative'>
                            <span className='absolute -top-1 -right-2 bg-red-500 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs'>0</span>
                            <SlBasket className='text-black hover:text-[#78909C] text-xl hover:text-2xl duration-500 ' />
                        </div>
                    </div>
                </div>
                <div className='border-b border-[#D9D9D9] mx-4'></div>
            </div>
            <Navbar />
        </>
    )
}

export default Header
