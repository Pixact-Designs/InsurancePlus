'use client'
import Link from 'next/link';
import { TbWorld } from "react-icons/tb";
import { FiPhone } from "react-icons/fi";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
import Image from 'next/image';
import insurance_logo from '@/public/insurance_logo.png';
import { useState } from 'react';

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className='w-full h-30 bg-whitefixed top-0 left-0 z-50'>
            <div className='flex justify-between items-center mx-2'>

                    <Image 
                    src={insurance_logo} 
                    alt="Insurance Logo" 
                    width={250} 
                    height={100}
                    />

                <div className='md:hidden flex justify-center my-12 mr-8'>
                    <button 
                    className="text-2xl focus:outline-none"
                    onClick={() => setIsOpen(!isOpen)}
                    >
                    {isOpen ? <IoClose /> : <RxHamburgerMenu />}
                    </button>
                </div>

                <div className='hidden md:flex md:text-slate-800 md:text-lg md:justify-center md:my-12 md:mr-8 md:mx-60 space-x-4'>

                    <Link href="#about" className='mx-2 hover:text-[#00ADEA]'> Who Are We</Link>
                    <Link href="#why-choose-us" className='mx-2 hover:text-[#00ADEA]'> Why Us?</Link>
                    <Link href="#our-story" className='mx-2 hover:text-[#00ADEA]'> Our Story</Link>
                    <Link href="#next-step" className='mx-2 hover:text-[#00ADEA]'> Next Steps</Link>
                    
                    <Link href="#" className='mx-2 hover:text-[#00ADEA] flex'> 
                        <TbWorld className='m-1' />عَرَبِيّ
                    </Link>

                    <Link href="#contact">
                        <button className='flex w-auto px-4 h-10 p-2 rounded border border-slate-600 items-center hover:bg-slate-900 hover:text-white'>
                            <FiPhone className='mr-2' />
                            Contact Us
                        </button>
                    </Link>
                </div>

            </div>
            {isOpen && (
                <div className="absolute top-20 left-0 w-full bg-white shadow-lg py-4 md:hidden flex flex-col items-center space-y-4">
                    <Link href="#" onClick={() => setIsOpen(false)}>Who Are We</Link>
                    <Link href="#" onClick={() => setIsOpen(false)}>Why Us?</Link>
                    <Link href="#" onClick={() => setIsOpen(false)}>Our Story</Link>
                    <Link href="#" onClick={() => setIsOpen(false)}>Next Steps</Link>
                    <Link href="#" className='flex items-center' onClick={() => setIsOpen(false)}> 
                        <TbWorld className='mr-1' /> عَرَبِيّ
                    </Link>
                    <Link href="#" onClick={() => setIsOpen(false)}>
                        <button className='flex w-auto h-10 p-2 rounded border border-slate-600 items-center px-4 hover:bg-slate-900 hover:text-white'>
                            <FiPhone className='mr-2' />
                            Contact Us
                        </button>
                    </Link>
                </div>
            )}
        </nav>
    )
}
