"use client"
import Image from "next/image";
import personalInsurance from '@/public/personalInsurance.png'
import { GiCheckMark } from "react-icons/gi";
import { motion } from "framer-motion";

export default function PersonalInsurance(){
    const highlights=[
        'We handle the research.',
        'We present your options in clear, everyday language.',
        'We guide you every step of the way'

    ]
    return (
        <>
         <section className="m-4 p-8 flex flex-col md:flex-row items-center gap-8">
            <div className="w-full md:w-1/2">
            <motion.h1 className='font-bold text-3xl md:text-5xl'
             initial={{ x: -100, opacity: 0 }}
             whileInView={{ x: 0, opacity: 1 }}
             transition={{ duration: 1.5, ease: "easeOut" }}
             viewport={{ once: true }}>Think of us as your 
        
            </motion.h1>
            <motion.span className='text-[#00ADEA] font-bold text-3xl md:text-5xl '
             initial={{ x: -100, opacity: 0 }}
             whileInView={{ x: 0, opacity: 1 }}
             transition={{ duration: 1.5, ease: "easeOut" }}
             viewport={{ once: true }}>
                    personal insurance concierge:
                    </motion.span>
            <motion.ul role="list" className="list-none space-y-2 text-sm mt-4"
             initial={{ y: 50, opacity: 0 }}
             whileInView={{ y: 0, opacity: 1 }}
             transition={{ duration: 1.5, ease: "easeOut" }}
             viewport={{ once: true }}>
                      {highlights.map((highlight) => (
                        <li key={highlight} className='text-lg font-medium text-slate-600'>
                          <span className="flex"><GiCheckMark className="text-green-400 m-1" />{highlight}</span>
                        </li>
                      ))}
                    </motion.ul>
                <p className='text-lg text-slate-600 font-medium'>
                So you can make confident choices about your coverage without second-guessing.            </p>
            </div>
            <motion.div className="relative w-full md:w-1/2 flex justify-center "
             initial={{ x: 100, opacity: 0 }}
                 whileInView={{ x: 0, opacity: 1 }}
                 transition={{ duration: 1.5, ease: "easeOut" }}
                 viewport={{ once: true }}>
             <div 
                className="absolute bg-black/50 rounded-full blur-lg"
                style={{
                    width: '3%', 
                    height: '35%', 
                    top: '58%', 
                    left: '75%', 
                    transform: 'rotate(70.54deg)',
                    zIndex: '-1'
                }}
            ></div>
    
    
                <Image
                src={personalInsurance}
                width={355}
                height={450}
                alt="Personal-Insurance"
                />
            </motion.div>
        </section>
        </>
    )
}