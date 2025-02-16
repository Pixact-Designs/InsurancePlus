"use client";

import Image from 'next/image'
import about from '@/public/about.png'
import { motion } from "framer-motion"

export default function About() {
    return (
        <>
        <section id="about" className="m-4 p-8 flex flex-col md:flex-row items-center gap-8">
            <div className="w-full md:w-1/2">
                <motion.h1 
                 initial={{ x: -100, opacity: 0 }}
                 whileInView={{ x: 0, opacity: 1 }}
                 transition={{ duration: 1.5, ease: "easeOut" }}
                 viewport={{ once: true }}
                className='font-bold text-3xl md:text-5xl my-4'>
                    Who We Are
                </motion.h1>
                <motion.p 
                 initial={{ y: 50, opacity: 0 }}
                 whileInView={{ y: 0, opacity: 1 }}
                 transition={{ duration: 1.5, ease: "easeOut" }}
                 viewport={{ once: true }}
                className='text-lg text-slate-600 font-medium'>
                    At InsurancePlus, we believe insurance should be straightforward and stress-free. Whether you’re protecting your car, your home, your health, or your travels, our mission is the same: to secure what matters most to you, without the hassle.
                    <br /><br />
                From day one, we set out to flip the script on traditional insurance. Forget endless paperwork, confusing terms, and hidden fees—our approach is transparent, personal, and guided by real humans who care

                </motion.p>
            </div>
           
            <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            viewport={{ once: true }}
            
            className="w-full md:w-1/2 flex justify-center">
                <Image
                src={about}
                width={453}
                height={420}
                alt="team-unity"
                />
            </motion.div>
        </section>
        </>
    )
}