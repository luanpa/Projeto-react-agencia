import React from "react";
import {AiFillStar} from 'react-icons/ai'

const Lugares = () => {
    return (
            <div className='w-4/5 m-auto'>
      <div className='w-full xl:w-1/2 m-auto text-center my-10 space-y-5'>
        <h1 className='text-4xl font-bold font-poppins text-blue-400'>Diversão e Arte juiz de fora</h1>
      </div>
      <div className='grid grid-rows-2 grid-flow-col gap-4 w-full h-[300px] md:h-[450px] pb-10 border-b'>
        <div className='row-span-1 col-span-2'>
          <img className='w-full h-full object-cover rounded-md' src="images/j.jpg" alt="" />
        </div>
        <div className='row-span-1 col-span-1'>
          <img className='w-full h-full object-cover rounded-md' src="images/p.jpg" alt="" />
        </div>
        <div className='row-span-1 col-span-1'>
          <img className='w-full h-full object-cover rounded-md' src="images/pp.png" alt="" />
        </div>
        <div className='row-span-2 col-span-1'>
          <img className='w-full h-full object-cover rounded-md' src="images/t.jpg" alt="" />
        </div>
        <div className='row-span-1 col-span-1'>
          <img className='w-full h-full object-cover rounded-md' src="images/uf.jpg" alt="" />
        </div>
        <div className='row-span-1 col-span-1'>
          <img className='w-full h-full object-cover rounded-md' src="images/tre.jpg" alt="" />
        </div>
      </div>
            <div className='my-10 text-center'>
        <h1 className='text-4xl font-bold font-poppins text-blue-400'>Recomendados</h1>
        <section className='grid md:grid-cols-3 xl:grid-cols-4 grid-cols-2 gap-7 my-10 justify-items-center items-center'>
          <div className='drop-shadow-2xl text-left rounded space-y-2 bg-white'>
            <img className='w-full h-1/2 object-cover rounded-t-lg' src="images/j.jpg" alt="" />
            <div className='p-4 space-y-4'>
              <div className='flex justify-between'>
                <p className='text-sm text-blue-400 '>Jardim Botânico da UFJF</p>
                <p className='font-bold'></p>
              </div>
              <p className='font-Sans-serif'>é um grande fragmento florestal de Mata Atlântica, onde, por meio de ações de educação ambiental.</p>
              <div className='flex justify-between items-center'>
              <button class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
                 Ver fotos
                </button>
                <button class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-2 border-b-4 border-blue-700 hover:border-blue-500 rounded">
                Trajeto
                </button>
                <p className='flex items-center space-x-2 text-orange-400'>
                  <AiFillStar/>
                  <span>4.8</span>
                </p>
              </div>
            </div>
          </div>
          <div className='drop-shadow-2xl text-left rounded space-y-2 bg-white'>
            <img className='w-full h-1/2 object-cover rounded-t-lg' src="images/p.jpg" alt="" />
            <div className='p-4 space-y-4'>
              <div className='flex justify-between'>
                <p className='text-sm text-blue-400'>Parque da Lajinha</p>
                <p className='font-bold'></p>
              </div>
              <p className='font-Sans-serif'>Possui área de 867.000 m² , distribuídas em áreas de mata nativa, trilhas, lago, jardins e passeios variados.</p>
              <div className='flex justify-between items-center'>
              <button class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-2 border-b-4 border-blue-700 hover:border-blue-500 rounded">
                 Ver fotos
                </button>
                <button class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-2 border-b-4 border-blue-700 hover:border-blue-500 rounded">
                Trajeto
                </button>
                <p className='flex items-center space-x-2 text-orange-400'>
                  <AiFillStar/>
                  <span>4.8</span>
                </p>
              </div>
            </div>
          </div>
          <div className='drop-shadow-2xl text-left rounded space-y-2 bg-white'>
            <img className='w-full h-1/2 object-cover rounded-t-lg' src="images/tre.jpg" alt="" />
            <div className='p-4 space-y-4'>
              <div className='flex justify-between'>
                <p className='text-sm text-blue-400'>Parque Municipal</p>
                <p className='font-bold'></p>
              </div>
              <p className='font-Sans-serif'>A iniciativa do Parque Municipal surge como mais uma das alternativas à potencialização de atividades turísticas, culturais, esportivas e de lazer na cidade.!</p>
              <div className='flex justify-between items-center'>
              <button class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
                 Ver fotos
                </button>
                <button class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-2 border-b-4 border-blue-700 hover:border-blue-500 rounded">
                Trajeto
                </button>
                <p className='flex items-center space-x-2 text-orange-400'>
                  <AiFillStar/>
                  <span>4.8</span>
                </p>
              </div>
            </div>
          </div>
          <div className='drop-shadow-2xl text-left rounded space-y-2 bg-white'>
            <img className='w-full h-1/2 object-cover rounded-t-lg' src="images/uf.jpg" alt="" />
            <div className='p-4 space-y-4'>
              <div className='flex justify-between'>
                <p className='text-sm text-blue-400'>Ufjf</p>
                <p className='font-bold'></p>
              </div>
              <p className='font-Sans-serif'>A Universidade Federal de Juiz de Fora é uma instituição de ensino superior pública federal brasileira!</p>
              <div className='flex justify-between items-center'>
              <button class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
                 Ver fotos
                </button>
                <button class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-2 border-b-4 border-blue-700 hover:border-blue-500 rounded">
                Trajeto
                </button>
                <p className='flex items-center space-x-2 text-orange-400'>
                  <AiFillStar/>
                  <span>4.8</span>
                </p>
              </div>
            </div>
          </div>
          <div className='drop-shadow-2xl text-left rounded space-y-2 bg-white'>
            <img className='w-full h-1/2 object-cover rounded-t-lg' src="images/t.jpg" alt="" />
            <div className='p-4 space-y-4'>
              <div className='flex justify-between'>
                <p className='text-sm text-blue-400'>Cine-Theatro Central</p>
                <p className='font-bold'></p>
              </div>
              <p className='font-Sans-serif'>O Cine-Theatro Central é um teatro localizado na cidade de Juiz de Fora, Minas Gerais. Sua capacidade é de 1,881 espectadores.!</p>
              <div className='flex justify-between items-center'>
              <button class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
                 Ver fotos
                </button>
                <button class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-2 border-b-4 border-blue-700 hover:border-blue-500 rounded">
                Trajeto
                </button>
                <p className='flex items-center space-x-2 text-orange-400'>
                  <AiFillStar/>
                  <span>4.8</span>
                </p>
              </div>
            </div>
          </div>
          <div className='drop-shadow-2xl text-left rounded space-y-2 bg-white'>
            <img className='w-full h-1/2 object-cover rounded-t-lg' src="images/cristo.jpg" alt="" />
            <div className='p-4 space-y-4'>
              <div className='flex justify-between'>
                <p className='text-sm text-blue-400'>Mirante do Morro do Cristo</p>
                <p className='font-bold'></p>
              </div>
              <p className='font-Sans-serif'>Espaço no topo da colina com um monumento ao Cristo Redentor e uma praça com vista de Juiz de Fora.!</p>
              <div className='flex justify-between items-center'>
              <button class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
                 Ver fotos
                </button>
                <button class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-2 border-b-4 border-blue-700 hover:border-blue-500 rounded">
                Trajeto
                </button>
                <p className='flex items-center space-x-2 text-orange-400'>
                  <AiFillStar/>
                  <span>4.8</span>
                </p>
              </div>
            </div>
          </div>
          <div className='drop-shadow-2xl text-left rounded space-y-2 bg-white'>
            <img className='w-full h-1/2 object-cover rounded-t-lg' src="images/mariano.jpg" alt="" />
            <div className='p-4 space-y-4'>
              <div className='flex justify-between'>
                <p className='text-sm text-blue-400'>Museu Mariano Procópio</p>
                <p className='font-bold'></p>
              </div>
              <p className='font-Sans-serif'> é o primeiro museu surgido em Minas Gerais. Fundado em 1915 por Alfredo Ferreira Lage, abriga um dos principais acervos do país, com aproximadamente 50 mil peças!</p>
              <div className='flex justify-between items-center'>
              <button class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
                 Ver fotos
                </button>
                <button class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-2 border-b-4 border-blue-700 hover:border-blue-500 rounded">
                Trajeto
                </button>
                <p className='flex items-center space-x-2 text-orange-400'>
                  <AiFillStar/>
                  <span>4.8</span>
                </p>
              </div>
            </div>
          </div>
          <div className='drop-shadow-2xl text-left rounded space-y-2 bg-white'>
            <img className='w-full h-1/2 object-cover rounded-t-lg' src="images/m.jpg" alt="" />
            <div className='p-4 space-y-4'>
              <div className='flex justify-between'>
                <p className='text-sm text-blue-400'>Museu de Arte Murilo Mendes (MAMM)</p>
                <p className='font-bold'></p>
              </div>
              <p className='font-Sans-serif'>O Museu de Arte Moderna Murilo Mendes localiza-se na cidade de Juiz de Fora, estado de Minas Gerais, no Brasil!</p>
              <div className='flex justify-between items-center'>
              <button class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
                 Ver fotos
                </button>
                <button class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-2 border-b-4 border-blue-700 hover:border-blue-500 rounded">
                Trajeto
                </button>
                <p className='flex items-center space-x-2 text-orange-400'>
                  <AiFillStar/>
                  <span>4.8</span>
                </p>
              </div>
            </div>
          </div>
        </section>
        <div class="text-center">
  <img
    src="images/foto.jpg"
    class="rounded-full w-32 mb-4 mx-auto"
    alt="Avatar"
  />
  <h5 class="text-xl font-medium leading-tight mb-2 text-blue-400">Luan Batista</h5>
  <p class="text-gray-500">Portfólio </p>
  
  
</div>

<div>
  
</div>
      </div>
    </div>

  )
}

export default Lugares