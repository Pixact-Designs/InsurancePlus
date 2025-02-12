import Image from "next/image";
import logo_footer from "@/public/logo_footer.png"
import Link from "next/link";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import Copyright from "./Copyright";

export default function Footer(){
    return(
        <>
        <section>
        <div className="bg-slate-900 p-14">
        <div className="pt-20">
            
            <Image
            src={logo_footer}
            height={100}
            width={300}
            alt="insurancePlus_logo"
            />
            <p className="text-white my-4">
            InsurancePlus – Providing peace of mind, one policy at a time.
            </p>
        </div>
        <div className="text-white my-4 text-xs md:text-base">
        <Link href="/" className='mr-2'>Home</Link>
        <Link href="/about" className='mx-2'>Who Are We</Link>
        <Link href="/why-us" className='mx-2'>Why Us?</Link>
        <Link href="/our-story" className='mx-2'>Our Story</Link>
        <Link href="/next-steps" className='mx-2'>Next Steps</Link>
        <Link href="/contact-us" className='mx-2'>Contact Us</Link>
        </div>
        <hr className="border-white md:w-[1200px] mx-2 my-4"/>
       <div className="flex flex-col-reverse md:flex-row p-2 md:justify-between">

        <p className="text-white text-xs">
        Licensed & Regulated by [Appropriate Regulatory Authority].
        </p>
        <div className="flex text-white text-lg py-2 md:py-1 ">
        <FaTwitter className="mx-1"/>
        <FaLinkedin className="mx-1"/>
        <AiFillInstagram className="mx-1"/>
        <FaFacebook className="mx-1"/>
        </div>
       </div>

      
        </div>

        <div className="bg-[#1B213F]">
        <p className="text-white text-xs p-4 flex justify-center">
            (C) 2025 InsurancePlus. All Rights Reserved.
            </p>
        </div>
        </section>
        </>
    )
}