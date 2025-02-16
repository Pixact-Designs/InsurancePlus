"use client";
import PeaceofMind from "./PeaceofMind";
import PersonalInsurance from "./PersonalInsurance";
import { motion } from "framer-motion";

export default function OurStory() {
    return (
        <>
        <section id="our-story" className="m-4 p-4 flex flex-col ">
            <h1 className="md:text-5xl text-3xl flex justify-center font-bold">
                Our Story
            </h1>
            <motion.p className=' m-2 p-10 flex text-lg text-slate-600 font-medium text-center'
             initial={{ y: 50, opacity: 0 }}
             whileInView={{ y: 0, opacity: 1 }}
             transition={{ duration: 1.5, ease: "easeOut" }}
             viewport={{ once: true }}>
            We started InsurancePlus with a simple idea: putting you first. We noticed how complicated insurance can be—and decided to fix it. By harnessing modern technology and a deep network of trusted insurance providers, we create a tailored experience just for you.
            </motion.p>
        </section>
      <PersonalInsurance/>
      <PeaceofMind/>
        </>
    )
}