import { FaWhatsapp } from "react-icons/fa";

export default function YNS(){
    return(
        <>
              <section className="m-4 p-4 flex flex-col ">
            <h1 className="md:text-5xl text-3xl flex justify-center font-bold">
                Your Next Step
            </h1>
            <p className=' my-3 mt-4 px-10 flex text-lg text-slate-600 font-medium text-center mx-auto'>
            Don’t leave your protection to chance. Let us safeguard what matters most to you with flexible coverage and a personal touch.            
            </p>
            <p className='px-10 flex text-lg text-slate-600 font-medium text-center mx-auto'>
            Click the button below to start your WhatsApp conversation with InsurancePlus.
            </p>
                <div className="mx-auto">

             <button className="border-2 border-transparent bg-[#00ADEA] hover:bg-white hover:text-[#00ADEA] hover:border-2 hover:border-[#00ADEA] my-4 flex justify-center items-center p-4 rounded w-72 text-white mx-auto sm:mx-0">
                <FaWhatsapp className="mr-2 text-xl" />
                WhatsApp Now
             </button>
                </div>
        </section>
        </>
    )
}