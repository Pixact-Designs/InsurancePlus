"use client";

import automobile from '@/public/automobile.png'
import Image from 'next/image'
import { motion } from "framer-motion"

export default function Automobiles(){
    return(
        <>
        <section className="m-4 p-8 flex flex-col md:flex-row items-center gap-8">
                    <div className="w-full md:w-1/2">
                        <motion.h1 className='font-bold text-3xl md:text-5xl my-4'
                         initial={{ x: -100, opacity: 0 }}
                         whileInView={{ x: 0, opacity: 1 }}
                         transition={{ duration: 1.5, ease: "easeOut" }}
                         viewport={{ once: true }}>Specialized in 
                            <span className='text-[#00ADEA] font-bold text-3xl md:text-5xl my-4 ml-2 '>
                                Automobiles
                            </span>
                            </motion.h1>
                        <motion.p className='text-lg text-slate-600 font-medium'
                         initial={{ y: 50, opacity: 0 }}
                         whileInView={{ y: 0, opacity: 1 }}
                         transition={{ duration: 1.5, ease: "easeOut" }}
                         viewport={{ once: true }}>
                        We’re passionate about getting you on the road fully covered. Count on us for the best deals and expert advice for your vehicles, whether you’re driving family sedans or managing a fleet.                        
                        </motion.p>
                        
                    </div>
                    <motion.div className="relative w-full md:w-1/2 flex justify-center"
                     initial={{ x: 100, opacity: 0 }}
                     whileInView={{ x: 0, opacity: 1 }}
                     transition={{ duration: 1.5, ease: "easeOut" }}
                     viewport={{ once: true }}>
                     <div 
                        className="absolute bg-black/40 rounded-full blur-xl"
                        style={{
                            width: '25%', 
                            height: '70%', 
                            top: '27%', 
                            left: '35%', 
                            transform: 'rotate(-70.56deg)',
                            zIndex: '-1'
                        }}
                    ></div>


                        <Image
                        src={automobile}
                        width={466}
                        height={694}
                        alt="automobile"
                        />
                    </motion.div>
                </section>
        </>
    )
}