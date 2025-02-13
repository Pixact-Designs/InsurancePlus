import PeaceofMind from "./PeaceofMind";
import PersonalInsurance from "./PersonalInsurance";
import Future from "./Future";

export default function OurStory() {
    return (
        <>
        <section id="our-story" className="m-4 p-4 flex flex-col ">
            <h1 className="md:text-5xl text-3xl flex justify-center font-bold">
                Our Story
            </h1>
            <p className=' m-2 p-10 flex text-lg text-slate-600 font-medium text-center'>
            We started InsurancePlus with a simple idea: putting you first. We noticed how complicated insurance can be—and decided to fix it. By harnessing modern technology and a deep network of trusted insurance providers, we create a tailored experience just for you.
            </p>
        </section>
      <PersonalInsurance/>
      <PeaceofMind/>
      <Future/>
        </>
    )
}