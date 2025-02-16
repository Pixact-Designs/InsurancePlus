"use client";
import { FaArrowRight } from "react-icons/fa";
import Image from 'next/image';
import header_img1 from '@/public/header-img1.png';
import header_img2 from '@/public/header_img2.png';
import header_img3 from '@/public/header_img3.png';
import header_img4 from '@/public/header_img4.png';
import header_img5 from '@/public/header_img5.png';
import { motion } from "framer-motion";

export default function Header() {
  
  return (
    <>
      <section>
        <div className="flex flex-col sm:flex-row p-8 mx-2 items-center sm:items-start">
          <motion.div 
          className="w-full sm:w-1/2 text-center sm:text-left"
            initial={{ x: -100, opacity: 0 }}
             whileInView={{ x: 0, opacity: 1 }}
             transition={{ duration: 1.5, ease: "easeOut" }}
             viewport={{ once: true }}>
            <span className="my-4 text-[#00ADEA] text-2xl font-bold">InsurancePlus.ae</span>
            <h1 className="my-4 text-4xl sm:text-5xl font-bold">
              We’ve Got You Covered, Plus 
              <span className="text-[#00ADEA]"> So Much More</span>
            </h1>
            <h2 className="text-lg sm:text-2xl text-slate-600">
              Insurance, Simplified—Because You Deserve Peace of Mind.
            </h2>
         
         

          <motion.button className="border-2 border-transparent hover:bg-white hover:text-slate-900 hover:border-2 hover:border-slate-900 my-4 flex justify-center items-center bg-slate-900 p-4 rounded w-72 text-white mx-auto sm:mx-0"
             initial={{ y: 50, opacity: 0 }}
             whileInView={{ y: 0, opacity: 1 }}
             transition={{ duration: 1.5, ease: "easeOut" }}
             viewport={{ once: true }}>
              Get Started
              <FaArrowRight className="ml-2" />
            </motion.button>
            </motion.div>
          <motion.div 
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            viewport={{ once: true }}
            className="w-full sm:w-1/2 flex flex-col items-center mt-8 sm:mt-0">
           
            <div className="flex gap-2 justify-center">
                <Image 
                  src={header_img1}
                  width={163}
                  height={142}
                  className='md:mt-[70px] mt-12 w-[111.18px] h-[96.58px] md:w-[163px] md:h-[142px]'
                  alt="Header Image 1"
                />
               
              
            <div className='w-[96.81px] h-[145.21px] md:w-[141.94px] md:h-[212.9px] bg-[#00ADEA]'>
              <Image
                src={header_img2}
                width={142}
                height={213}
                alt="Header Image 2"
              />
                 <div 
                className="relative bg-black/100 rounded-full blur-lg"
                style={{
                    width: '20%', 
                    height: '60%', 
                    top: '-30%', 
                    left: '40%', 
                    transform: 'rotate(90deg)',
                }}
                ></div>
              </div>
            </div>

            <div className="px-4 mt-3 flex gap-2 sm:gap-2 justify-center ">
             <div className='w-full h-full md:w-full md:h-full bg-[#00ADEA]'>

              <Image 
                src={header_img3}
                width={175}
                height={170}
                alt="Header Image 3"
              />

              
             </div>

             <div className=' w-full h-[105.28px] md:w-full md:h-[213px]  bg-[#00ADEA]'>
                
                <Image
                  src={header_img4}
                  width={181}
                  height={159}
                  alt="Header Image 4"
                  className="my-8"
                />
                   <div 
                className="relative bg-black rounded-full blur-lg"
                style={{
                    width: '15%', 
                    height: '40%', 
                    top: '-38%', 
                    left: '40%', 
                    transform: 'rotate(90deg)',
                }}
                ></div>
              </div> 

              <div className='w-full h-full md:w-full md:h-full  bg-[#00ADEA]'>
              <Image
                src={header_img5}
                width={225}
                height={150}
                alt="Header Image 5"
              />
              </div>

            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
