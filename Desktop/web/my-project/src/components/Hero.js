import React from 'react'
import { BsGithub, BsInstagram, BsFacebook } from 'react-icons/bs';


const Hero = () => {
  return (
    <div className='px-4 pt-3 lg:px-20 md:flex md:justify-between'> 
     <div className='text-white text-[35px] font-semibold px-6 pt-7'>
    <p className='leading-[110%]'>{/* deixa alinhado o text web */}
        MEU PORTFÓLIO <span className='text-[#04FBBA]'>WEB3</span><br /> BASEADO EM <br />DESIGN AGENCY</p>
      </div> 
        <div className='flex items-end justify-end pt-4'>{/* como funciona uma */}
            <ul className='text-white flex md:flex-col gap-6'>
                <li className='flex items-center gap-2'>
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