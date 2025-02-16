"use client";
import Image from "next/image";
import transparacy from '@/public/transparacy.png'
import { motion } from "framer-motion";

export default function Transparacy(){
    return(
        <>
         <section className="m-4 p-8 flex flex-col md:flex-row items-center gap-8">
                                    <div className="w-full md:w-1/2">
                                    <motion.h1 className='font-bold text-3xl md:text-5xl my-4'
                                     initial={{ x: -100, opacity: 0 }}
                                     whileInView={{ x: 0, opacity: 1 }}
                                     transition={{ duration: 1.5, ease: "easeOut" }}
                                     viewport={{ once: true }}>Transparent &  
                                    <span className='text-[#00ADEA] font-bold text-3xl md:text-5xl my-4 ml-2 '>
                                    Trustworthy
                                    </span>
                                    </motion.h1>
                                        <motion.p className='text-lg text-slate-600 font-medium'
                                         initial={{ y: 50, opacity: 0 }}
                                         whileInView={{ y: 0, opacity: 1 }}
                                         transition={{ duration: 1.5, ease: "easeOut" }}
                                         viewport={{ once: true }}>
                                        We partner with top-rated insurers and negotiate on your behalf for the best possible coverage and prices—no hidden costs, no surprises. Ever.                                    
                                        </motion.p>
                                    </div>
                                    <motion.div className="relative w-full md:w-1/2 flex justify-center"
                                     initial={{ x: 100, opacity: 0 }}
                                     whileInView={{ x: 0, opacity: 1 }}
                                     transition={{ duration: 1.5, ease: "easeOut" }}
                                     viewport={{ once: true }}>
                                     <div 
                                        className="absolute bg-black/60 rounded-full blur-lg"
                                        style={{
                                            width: '5%', 
                                            height: '55%', 
                                            top: '50%', 
                                            left: '70%', 
                                            transform: 'rotate(80deg)',
                                            zIndex: '-1'
                                        }}
                                    ></div>

<div 
                                        className="absolute bg-black/60 rounded-full blur-lg"
                                        style={{
                                            width: '5%', 
                                            height: '55%', 
                                            top: '50%', 
                                            left: '25%', 
                                            transform: 'rotate(100deg)',
                                            zIndex: '-1'
                                        }}
                                    ></div>
                
                
                                        <Image
                                        src={transparacy}
                                        width={561}
                                        height={354}
                                        alt="transparacy-&-trustworthy"
                                        />
                                    </motion.div>
                                </section>
        </>
    )
}