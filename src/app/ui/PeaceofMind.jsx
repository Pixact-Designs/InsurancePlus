"use client"
import POM from '@/public/POM.png'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function PeaceofMind(){
    return(
        <>
          <section className="m-4 p-8 flex flex-col md:flex-row-reverse items-center gap-8">
        
                    <div className="w-full md:w-1/2">
                    <motion.h1 className='font-bold text-3xl md:text-5xl my-4'
                     initial={{ x: 100, opacity: 0 }}
                     whileInView={{ x: 0, opacity: 1 }}
                     transition={{ duration: 1.5, ease: "easeOut" }}
                     viewport={{ once: true }}>
                        Ready for 
                        <span className='text-[#00ADEA] font-bold text-3xl md:text-5xl my-4 ml-2 '>
                         Peace of Mind?
                        </span>
                        </motion.h1>
                    <motion.p className='text-lg text-slate-600 font-medium'
                     initial={{ y: 50, opacity: 0 }}
                     whileInView={{ y: 0, opacity: 1 }}
                     transition={{ duration: 1.5, ease: "easeOut" }}
                     viewport={{ once: true }}>
                         Getting insured should be as easy as saying “Hello.” That’s why we offer fast and friendly support via WhatsApp—your favorite messaging app.                    
                    </motion.p>
                 </div>
             
                 <motion.div className="relative w-full md:w-1/2 flex justify-center"
                  initial={{ x: -100, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  viewport={{ once: true }}>
                 <div 
                    className="absolute bg-black/70 rounded-full blur-lg"
                    style={{
                        width: '3%', 
                        height: '95%', 
                        top: '42%', 
                        left: '48%', 
                        transform: 'rotate(90deg)',
                        zIndex: '-1'
                    }}
                ></div>
        
                    <Image
                    src={POM}
                    width={432}
                    height={432}
                    alt="Peace-of-Mind"
                    />
                </motion.div>
                </section> 
        </>

    )
}