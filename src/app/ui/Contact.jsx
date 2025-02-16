"use client";
import support from '@/public/support.png'
import Image from 'next/image'
import { motion } from 'framer-motion'
export default function Contact(){
    return(
        <>
          <section id="contact" className="m-4 p-8 flex flex-col md:flex-row-reverse items-center gap-8">
        
                    <div className="w-full md:w-1/2">
                    <motion.h1 className='text-[#00ADEA] font-bold text-3xl md:text-5xl my-4'
                     initial={{ x: 100, opacity: 0 }}
                     whileInView={{ x: 0, opacity: 1 }}
                     transition={{ duration: 1.5, ease: "easeOut" }}
                     viewport={{ once: true }}>
                        Real Experts 
                        <span className='text-black font-bold text-3xl md:text-5xl my-4 ml-2 '>
                        , Real Support
                        </span>
                        </motion.h1>
                    <motion.p className='text-lg text-slate-600 font-medium'
                     initial={{ y: 50, opacity: 0 }}
                     whileInView={{ y: 0, opacity: 1 }}
                     transition={{ duration: 1.5, ease: "easeOut" }}
                     viewport={{ once: true }}>
                         InsurancePlus is powered by people who know insurance inside out. Have questions? We’re here to help—no robots, no lengthy hold times, just friendly, professional advice.
                    </motion.p>
                 </div>
             
                 <motion.div className="relative w-full md:w-1/2 flex justify-center"
                  initial={{ x: -100, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  viewport={{ once: true }}>
                 <div 
                    className="absolute bg-black/50 rounded-full blur-xl"
                    style={{
                        width: '15%', 
                        height: '30%', 
                        top: '70%', 
                        left: '42%', 
                        transform: 'rotate(90deg)',
                        zIndex: '-1'
                    }}
                ></div>
        
                    <Image
                    src={support}
                    width={409}
                    height={272}
                    alt="all-in-One"
                    />
                </motion.div>
                </section> 
        </>

    )
}