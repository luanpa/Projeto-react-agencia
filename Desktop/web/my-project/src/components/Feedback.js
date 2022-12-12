import React from 'react'
import { FaQuoteLeft, } from 'react-icons/fa';
import eu from "../assets/eu.jpg";

const Feedback = () => {
  return (
    <div className='px-1 lg:px-15'>
        <div className='text-white flex items-center gap-3 pt-10 lg:px-20 text-[35px] font-semibold px-6 pt-7'>
            <p className='px-1 lg:px-15'>Feedback dos <span className='text-[#04FBBA]'>Clientes</span></p>

            </div>
            <div className='px-1 lg:px-20'>
             <FaQuoteLeft className='text-[#04FBBA]'/>
             <p className='text-white px-1 lg:px-15'>
             Parabéns pelo atendimento e agilidade. A WEB3 é 10!<br/> Parabéns a equipe técnica pelo excelente trabalho realizado 
             </p>    
        </div>
        <div class="text-center pt-40">
  <img
    src={eu}
    class="rounded-full w-40 mb-4 mx-auto "
    alt="Avatar"
  />
  <h5 class=" text-white text-xl font-medium leading-tight mb-2 ">Luan batista</h5>
  <p class=" text-white  text-[#04FBBA]">Programador</p>
</div>
<div>
  
</div>
    </div>
  )
}

export default Feedback