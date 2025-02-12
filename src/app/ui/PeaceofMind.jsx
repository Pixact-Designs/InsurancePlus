import POM from '@/public/POM.png'
import Image from 'next/image'

export default function PeaceofMind(){
    return(
        <>
          <section className="m-4 p-8 flex flex-col md:flex-row-reverse items-center gap-8">
        
                    <div className="w-full md:w-1/2">
                    <h1 className='font-bold text-3xl md:text-5xl my-4'>
                        Ready for 
                        <span className='text-[#00ADEA] font-bold text-3xl md:text-5xl my-4 ml-2 '>
                         Peace of Mind?
                        </span>
                        </h1>
                    <p className='text-lg text-slate-600 font-medium'>
                         Getting insured should be as easy as saying “Hello.” That’s why we offer fast and friendly support via WhatsApp—your favorite messaging app.                    
                    </p>
                 </div>
             
                 <div className="relative w-full md:w-1/2 flex justify-center">
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
                </div>
                </section> 
        </>

    )
}