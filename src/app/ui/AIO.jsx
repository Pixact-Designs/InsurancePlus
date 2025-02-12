import allinOne from '@/public/allinOne.png'
import Image from 'next/image'

export default function AIO(){
    return(
        <>
        <section className="m-4 p-8 flex flex-col md:flex-row-reverse items-center gap-8">

            <div className="w-full md:w-1/2">
            <h1 className='text-[#00ADEA] font-bold text-3xl md:text-5xl my-4'>All-in-One 
                <span className='text-black font-bold text-3xl md:text-5xl my-4 ml-2 '>
                      Coverage
                </span>
                </h1>
            <p className='text-lg text-slate-600 font-medium'>
            Need more than just car insurance? No problem. From health and life to home and travel, we’re your one-stop shop for all your insurance needs. One partner, multiple solutions.
            </p>
         </div>
     
         <div className="relative w-full md:w-1/2 flex justify-center">
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
        </div>
        </section>       
        </>
    )
}