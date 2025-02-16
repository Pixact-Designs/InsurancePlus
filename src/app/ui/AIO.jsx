"use client";
import allinOne from '@/public/allinOne.png'
import Image from 'next/image'
import { motion } from 'framer-motion'
export default function AIO(){
    return(
        <>
        <section className="m-4 p-8 flex flex-col md:flex-row-reverse items-center gap-8">

            <div className="w-full md:w-1/2">
            <motion.h1 className='text-[#00ADEA] font-bold text-3xl md:text-5xl my-4'
             initial={{ x: 100, opacity: 0 }}
             whileInView={{ x: 0, opacity: 1 }}
             transition={{ duration: 1.5, ease: "easeOut" }}
             viewport={{ once: true }}>
                All-in-One 
                <span className='text-black font-bold text-3xl md:text-5xl my-4 ml-2 '>
                      Coverage
                </span>
                </motion.h1>
            <motion.p className='text-lg text-slate-600 font-medium'
             initial={{ y: 50, opacity: 0 }}
             whileInView={{ y: 0, opacity: 1 }}
             transition={{ duration: 1.5, ease: "easeOut" }}
             viewport={{ once: true }}>
            Need more than just car insurance? No problem. From health and life to home and travel, we’re your one-stop shop for all your insurance needs. One partner, multiple solutions.
            </motion.p>
         </div>
     
         <motion.div className="relative w-full md:w-1/2 flex justify-center"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          viewport={{ once: true }}>
         <div 
            className="absolute bg-black/20 rounded-full blur-xl"
            style={{
                width: '70%', 
                height: '50%', 
                top: '45%', 
                left: '15%', 
                transform: 'rotate(13.56deg)',
                zIndex: '-1'
            }}
        ></div>

            <Image
            src={allinOne}
            width={529}
            height={336}
            alt="all-in-One"
            />
        </motion.div>
        </section>       
        </>
    )
}