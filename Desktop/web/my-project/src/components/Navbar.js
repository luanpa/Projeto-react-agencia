import React from 'react';
import logo from "../assets/logo.png"
const Navbar = () => {
  return (
    <div className='px-7 flex lg:px-22  items-center justify-between'> {/* muda a posição do logo  e da nav home*/}
    <div className='h-[4rem] flex items-center'>{/* parte preta do logo */}
        <img src={logo} alt='' className='w-30 h-20 '/>
        </div>
       <div className=''>
        <ul className='text-white flex  text-white items-center gap-8'>
          <li className='hidden sm:flex'>Home</li>
          <li className='hidden sm:flex'>About Us</li>
          <li>Portfólio</li>
          <li className='hidden sm:flex'>Reviews</li>
          <li>Contato</li>
        </ul>

        </div>  
      </div>
    )
}

export default Navbar;