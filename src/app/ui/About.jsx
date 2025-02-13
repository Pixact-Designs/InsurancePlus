import Image from 'next/image'
import about from '@/public/about.png'

export default function About() {
    return (
        <>
        <section id="about" className="m-4 p-8 flex flex-col md:flex-row items-center gap-8">
            <div className="w-full md:w-1/2">
                <h1 className='font-bold text-3xl md:text-5xl my-4'>Who We Are</h1>
                <p className='text-lg text-slate-600 font-medium'>
                    At InsurancePlus, we believe insurance should be straightforward and stress-free. Whether you’re protecting your car, your home, your health, or your travels, our mission is the same: to secure what matters most to you, without the hassle.
                </p>
                <p className='my-2 text-lg text-slate-600 font-medium'>
                From day one, we set out to flip the script on traditional insurance. Forget endless paperwork, confusing terms, and hidden fees—our approach is transparent, personal, and guided by real humans who care

                </p>
            </div>
            <div className="w-full md:w-1/2 flex justify-center">
                <Image
                src={about}
                width={453}
                height={420}
                alt="team-unity"
                />
            </div>
        </section>
        </>
    )
}