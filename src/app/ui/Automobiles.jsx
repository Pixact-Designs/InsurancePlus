import automobile from '@/public/automobile.png'
import Image from 'next/image'
export default function Automobiles(){
    return(
        <>
        <section className="m-4 p-8 flex flex-col md:flex-row items-center gap-8">
                    <div className="w-full md:w-1/2">
                        <h1 className='font-bold text-3xl md:text-5xl my-4'>Specialized in 
                            <span className='text-[#00ADEA] font-bold text-3xl md:text-5xl my-4 ml-2 '>
                                Automobiles
                            </span>
                            </h1>
                        <p className='text-lg text-slate-600 font-medium'>
                        We’re passionate about getting you on the road fully covered. Count on us for the best deals and expert advice for your vehicles, whether you’re driving family sedans or managing a fleet.                        </p>
                        
                    </div>
                    <div className="relative w-full md:w-1/2 flex justify-center">
                     <div 
                        className="absolute bg-black/40 rounded-full blur-xl"
                        style={{
                            width: '25%', 
                            height: '70%', 
                            top: '27%', 
                            left: '35%', 
                            transform: 'rotate(-70.56deg)',
                            zIndex: '-1'
                        }}
                    ></div>


                        <Image
                        src={automobile}
                        width={466}
                        height={694}
                        alt="automobile"
                        />
                    </div>
                </section>
        </>
    )
}