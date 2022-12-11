import React from "react";
import {

    AiOutlinePhone,
    AiOutlineMessage,
  } from "react-icons/ai";
  import { CiLocationOn } from "react-icons/ci";
  import { TfiAlarmClock } from "react-icons/tfi";
  import { FaAppStore, FaGooglePlay } from "react-icons/fa";
const Footer = () => {
    return (
         <footer className="w-4/5 m-auto py-10">
            <div className="md:flex md:justify-between sm:grid sm:grid-cols-2 sm:justify-center items-center m-10">
                <div className="space-y-3 py-3 border-b">
                    <h1 className="font-bold text-center text-3xl text-400 text-blue-400">Juiz de fora</h1>


                    <div className="flex items-center space-x-2">
                        <AiOutlinePhone/>
                        <p>(32) bla-bla-bla</p>
                    </div>
                    <div className="flex items-center space-x-2">
                        <AiOutlineMessage/>
                        <p>(32) bla-bla-bla</p>
                    </div>
                    <div className="flex items-center space-x-2">
                        <CiLocationOn/>
                        <p>(32) bla-bla-bla</p>
                    </div>
                    <div className="flex items-center space-x-2">
                        <TfiAlarmClock/>
                        <p>(32) bla-bla-bla</p>
                    </div>
                    </div>
        <div className="flex flex-col space-y-3 text-center">
          <h1 className="font-bold text-center text-3xl text-400 text-blue-400">Sobre nós</h1>
          <a className="text-xs text-gray-400" href="/">Serviços</a>
          <a className="text-xs text-gray-400" href="/">Blog</a>
          <a className="text-xs text-gray-400" href="/">Contato</a>
          <a className="text-xs text-gray-400" href="/">Sair</a>
        </div>
        <div className="flex flex-col space-y-3 text-center">
          <h1 className="font-bold text-center text-3xl text-400 text-blue-400">Account</h1>
          <a className="text-xs text-gray-400" href="/">Signup</a>
          <a className="text-xs text-gray-400" href="/">Login</a>
          <a className="text-xs text-gray-400" href="/">Contato</a>
          <a className="text-xs text-gray-400" href="/">Sair</a>
        </div>
        <div className="flex flex-col space-y-3">
          <h1 className="font-bold text-center text-3xl text-400 text-blue-400">Download</h1>
          <p className="text-xs text-gray-400">Faça download Google Play</p>
          <button className="flex items-center space-x-4 text-left px-5 py-1 border rounded-md">
            <FaAppStore size={'1.5rem'}/>
            <h1>
              <p className="text-xs font-bold">Open On</p>
              <span className="font-bold">App Store</span>
            </h1>
          </button>
          <button  className="flex items-center space-x-4 text-left px-5 py-1 border rounded-md">
            <FaGooglePlay  size={'1.5rem'}/>
            <h1>
              <p className="text-xs font-bold">Open On</p>
              <span className="font-bold">App Store</span>
            </h1>
          </button>
        </div>
      </div>
    </footer>
  );
};
export default Footer