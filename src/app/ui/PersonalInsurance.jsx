import Image from "next/image";
import personalInsurance from '@/public/personalInsurance.png'
import { GiCheckMark } from "react-icons/gi";

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
            <h1 className='font-bold text-3xl md:text-5xl'>Think of us as your 
        
            </h1>
            <span className='text-[#00ADEA] font-bold text-3xl md:text-5xl '>
                    personal insurance concierge:
                    </span>
            <ul role="list" className="list-none space-y-2 text-sm mt-4">
                      {highlights.map((highlight) => (
                        <li key={highlight} className='text-lg font-medium text-slate-600'>
                          <span className="flex"><GiCheckMark className="text-green-400 m-1" />{highlight}</span>
                        </li>
                      ))}
                    </ul>
                <p className='text-lg text-slate-600 font-medium'>
                So you can make confident choices about your coverage without second-guessing.            </p>
            </div>
            <div className="relative w-full md:w-1/2 flex justify-center ">
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
            </div>
        </section>
        </>
    )
}