import React from "react";
import {AiFillFacebook,AiFillInstagram,AiFillTwitterSquare} from 'react-icons/ai'

const Home = () => {
    return (
        <div>
            <div className="w-full h-screen relative">
            <img src="images\pp.png" alt="" className="w-full h-full object-cover" />
            </div>
            <nav className="w-full absolute top-11 p-5 flex justify-between text-white z-10">
                <div>
                    <h1 className="text-3xl font-bold">Pontos Turisticos juiz de fora</h1>
                    
                </div>
                <div>
                    <ul className="flex space-x-10 text-sm font-bold">
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        
                    </ul>

                </div>
            </nav>
            <div className="absolute top-0 h-screen flex flex-col space-y-10 justify-center items-center bg-black opacity-75 xl:w-1/3 sm:w-1/2 z-0">
            <div className="text-white text-center space-y-5">
                  <h1>Usando React</h1>
                <p className="mx-10 text-gray-400">Site para portfolio, pontos turisticos de juiz de fora.</p>
            </div>  
            <div className="space-x-2">
          <button className="bg-white py-2 px-5 rounded-md">Sobre nós</button>
          <button className=" bg-white py-2 px-5 rounded-md">Bares</button>
          <button className="bg-white py-2 px-5 rounded-md">Restaurantes</button>
        </div>
            <div className="text-white flex space-x-5">
                <AiFillFacebook size={"2em"}/>
                <AiFillInstagram size={"2em"}/>
                <AiFillTwitterSquare size={"2em"}/>
            </div>
            </div>
        </div>
        
    ) 
}
export default Home