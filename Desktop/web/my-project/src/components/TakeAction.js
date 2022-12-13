import React from 'react'
import { BsCheckCircle } from "react-icons/bs";
import test1 from "../assets/test1.jpg"


function TakeAction() {
  return (
    /* Marcas */
    <div className='px-1 lg:px-5 '>
<div className='order-1 text-white flex items-center gap-3 pt-10 lg:px-20'>
        <BsCheckCircle className='text-[50px]'/>
        <p className=''>24/Online Suport </p>
        <BsCheckCircle className='text-[50px]'/>
        <p className=''>Serviço Rápido </p>
        <div className=' object-fill h-0 w-45 pl-40 '>{/* aqui aonde muda "meu projeto" */}
        <img src={test1} alt="" className=' rounded  pl-20  h-70  ' />{/* aqui muda pra direita */}
    </div>
    </div>
    {/* about */}
    <div className='lg:px-1'>
        <div className='text-white flex items-center gap-3 pt-10 lg:px-20 md:flex'>
        <p className='md:flex'> Salvando o mundo com<br/> um bom design <br/>Porque a sua satisfação é tudo!</p>
        </div>
    </div>
    {/* button */}
    <div className='flex items-center lg:px-20'>
    <div className='bg-[#04FBBA] text-black font-semibold py-4 px-4 w-[10rem] text-center mt-10 '>
      <p>Meu Projeto</p>
    </div> 
   

    </div>
    </div>  
  
  )
}

export default TakeAction