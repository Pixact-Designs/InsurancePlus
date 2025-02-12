import Image from "next/image";
import future from '@/public/future.png'
import { GiCheckMark } from "react-icons/gi";
import { FaWhatsapp } from "react-icons/fa";

export default function Future(){
    const highlights=[
        'Click the WhatsApp Button Below.',
        'Chat With Us',
        'Get a Free, Tailored Quote'

    ]
    return (
        <>
         <section className="m-4 p-8 flex flex-col md:flex-row items-center gap-8">
            <div className="w-full md:w-1/2">
            <h1 className='text-[#00ADEA] font-bold text-3xl md:text-5xl'>
            Protect your future
            </h1>
            <span className='text-black font-bold text-3xl md:text-5xl '>
             in just a few taps:
                    </span>
            <ol role="list" className="list-decimal space-y-2 text-sm my-4 ml-6">
                      {highlights.map((highlight) => (
                        <li key={highlight} className='text-lg font-medium text-slate-600'>
                          <span className="flex">{highlight}</span>
                        </li>
                      ))}
                    </ol>
                <p className='text-lg text-slate-600 font-medium'>
                No back-and-forth emails. No wasted time. Just instant connection with our insurance experts who’ll help you find the perfect coverage.            
                </p>

                 <button className="border-2 border-transparent hover:bg-white hover:text-slate-900 hover:border-2 hover:border-slate-900 my-4 flex justify-center items-center bg-slate-900 p-4 rounded w-72 text-white mx-auto sm:mx-0">
                    <FaWhatsapp className="mr-2 text-xl" />
                    Chat Now
                 </button>

                </div>
            <div className="relative w-full md:w-1/2 flex justify-center ">
             <div 
                className="absolute bg-black/60 rounded-full blur-lg"
                style={{
                    width: '3%', 
                    height: '35%', 
                    top: '78%', 
                    left: '52%', 
                    transform: 'rotate(90deg)',
                    zIndex: '-1'
                }}
            ></div>
    
    
                <Image
                src={future}
                width={600.15}
                height={400}
                alt="Protect-Your-Future"
                />
            </div>
        </section>
        </>
    )
}