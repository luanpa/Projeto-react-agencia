import React from 'react'
import { BsGithub, BsInstagram, BsFacebook,BsWhatsapp  } from 'react-icons/bs';


const Hero = () => {
  return (
    <div className='px-4 pt-3 lg:px-20 md:flex md:justify-between'> 
     <div className='text-white text-[35px] font-semibold px-6 pt-7'>
    <p className='leading-[110%]'>{/* deixa alinhado o text web */}
        MEU PORTFÓLIO <span className='text-[#04FBBA]'>LUAN</span><br /> BASEADO EM <br />DESIGN AGENCY</p>
      </div> 
      <div className='pt-10 '>
      <ul>
        <li className='flex items-center gap-2'>
          <BsWhatsapp className='text-white'/>
          <button class="bg-transparent hover:bg-[#04FBBA] text-[#04FBBA] font-semibold hover:text-white py-2 px-20 border border-[#04FBBA] hover:border-transparent rounded">
          Falar Com Um Dos Nossos Atendentes
</button>
        </li>
      </ul>

      </div>
        <div className='flex items-end justify-end pt-4 px-1 lg:px-5'>{/* como funciona uma */}
            <ul className='text-white flex md:flex-col gap-6'>
                <li className='flex items-center gap-2 '>
                  <BsGithub/>
                  <p className='hidden md:flex'>Github</p>
                </li>
                <li className='flex items-center gap-2'>
                  <BsInstagram/>
                  <p className='hidden md:flex'>Instagram</p>
                </li>
                <li className='flex items-center gap-2'>
                  <BsFacebook/>
                  <p className='hidden md:flex'>Facebook</p>
                </li>
             </ul>
            </div>
            
      </div>
      
  )
}

export default Hero