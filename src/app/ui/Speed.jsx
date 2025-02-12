import Image from "next/image";
import speed from '@/public/speed.png'

export default function Speed(){
    return (
        <>
               <section className="m-4 p-8 flex flex-col md:flex-row items-center gap-8">
                            <div className="w-full md:w-1/2">
                                <h1 className='font-bold text-3xl md:text-5xl my-4'>
                                Speed & Simplicity
                                    </h1>
                                <p className='text-lg text-slate-600 font-medium'>
                                Get started in minutes. Our user-friendly process means you’ll spend less time filling forms and more time enjoying life—because insurance should set you free, not weigh you down.                                
                            </p>
                            </div>
                            <div className="relative w-full md:w-1/2 flex justify-center">
                             <div 
                                className="absolute bg-black/40 rounded-full blur-xl"
                                style={{
                                    width: '15%', 
                                    height: '70%', 
                                    top: '35%', 
                                    left: '52%', 
                                    transform: 'rotate(65.54deg)',
                                    zIndex: '-1'
                                }}
                            ></div>
        
        
                                <Image
                                src={speed}
                                width={593}
                                height={400}
                                alt="speed-&-simpilcity"
                                />
                            </div>
                        </section>
        </>
    )
}