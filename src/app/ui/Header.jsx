import { FaArrowRight } from "react-icons/fa";
import Image from 'next/image';
import header_img1 from '@/public/header-img1.png';
import header_img2 from '@/public/header_img2.png';
import header_img3 from '@/public/header_img3.png';
import header_img4 from '@/public/header_img4.png';
import header_img5 from '@/public/header_img5.png';

export default function Header() {
  return (
    <>
      <section>
        <div className="flex flex-col sm:flex-row p-8 mx-8 items-center sm:items-start">
          <div className="w-full sm:w-1/2 text-center sm:text-left">
            <span className="my-4 text-[#00ADEA] text-2xl font-bold">InsurancePlus.ae</span>
            <h1 className="my-4 text-4xl sm:text-5xl font-bold">
              We’ve Got You Covered, Plus 
              <span className="text-[#00ADEA]"> So Much More</span>
            </h1>
            <h2 className="text-lg sm:text-2xl text-slate-600">
              Insurance, Simplified—Because You Deserve Peace of Mind.
            </h2>
            <button className="border-2 border-transparent hover:bg-white hover:text-slate-900 hover:border-2 hover:border-slate-900 my-4 flex justify-center items-center bg-slate-900 p-4 rounded w-72 text-white mx-auto sm:mx-0">
              Get Started
              <FaArrowRight className="ml-2" />
            </button>
          </div>

          <div className="w-full sm:w-1/2 flex flex-col items-center mt-8 sm:mt-0">
            <div className="flex gap-2 justify-center">
              <Image 
                src={header_img1}
                width={163}
                height={142}
                className='md:mt-[70px] mt-12 w-[111.18px] h-[96.58px] md:w-[163px] md:h-[142px]'
                alt="Header Image 1"
              />
              <Image
                src={header_img2}
                width={142}
                height={213}
                className='w-[96.81px] h-[145.21px] md:w-[141.94px] md:h-[212.9px] bg-[#00ADEA] '
                alt="Header Image 2"
              />
            </div>

            <div className="px-4 mt-3 flex gap-2 sm:gap-2 justify-center ">
              <Image 
                src={header_img3}
                width={175}
                height={170}
                className='w-[156.88px] h-[99.58px] md:w-[175px] md:h-[170px]  bg-[#00ADEA]'
                alt="Header Image 3"
              />

                <Image
                  src={header_img4}
                  width={180}
                  height={130}
                  className='w-[107.09px] h-[120.28px] md:w-[180px] md:h-[180px]  bg-[#00ADEA]'
                  alt="Header Image 4"
                />

              <Image
                src={header_img5}
                width={225}
                height={150}
                className='w-[153.47px] h-[102.31px] md:w-[225px] md:h-[150px]  bg-[#00ADEA]'
                alt="Header Image 5"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
