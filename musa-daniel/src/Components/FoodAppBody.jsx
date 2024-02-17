import React from 'react'
import { figma, foodMainFive, foodMainFour, foodMainOne, foodMainThree, foodMainTwo } from '../Data'

export default function FoodAppBody() {
  return (
    <section className='flex flex-col space-y-10 justify-center items-center w-full'>
        <div className='flex pl-5 items-center self-end bg-gradient-to-l to-[#F9881F] from-[#ED474A] w-[685px] h-[60px]'>
            <p className='self-center text-xl font-four font-extrabold'>Case Study</p>
        </div>
        <section className='flex flex-col-reverse space-y-reverse space-y-10 md:space-y-0
        md:flex-row md:justify-between w-full'>
        <div className='flex flex-col space-y-10 mx-auto pt-32'>
            <div className='flex flex-row space-x-5 md:space-x-0 md:flex-col md:space-y-1 
            items-center md:items-start'>
            <h2 className='bg-gradient-to-l font-four text-3xl md:text-4xl font-extrabold 
            text-transparent bg-clip-text to-[#F9881F] from-[#ED474A]'>ChowXpress</h2>
            <p className='mt-1 md:mt-0 font-four text-2xl md:text-3xl font-extrabold 
            text-white '>App Design</p>
            </div>
            <div className='flex flex-row justify-between w-full md:justify-normal md:w-max 
            md:space-x-8'>
            <p className='flex flex-col space-y-1 font-four font-extrabold'>
                <span className='text-base text-white'>Product Designer</span>
                <span className='text-xl text-[#FFB547]'>Musa Daniel</span>
            </p>
            <p className='flex flex-col space-y-1 font-four font-extrabold'>
                <span className='text-base text-white'>Screens</span>
                <span className='text-xl text-[#FFB547]'>27</span>
            </p>
            </div>
            <div className='flex flex-col space-y-5'> 
                <div className='rounded-full p-2 bg-[#FFB547] w-max'>
                <img src={figma} alt="figma" className='mx-auto w-[30px]'/>
                </div>
                <p className='text-center md:text-start font-four font-extrabold'>Tools: <br /> 
                Figma, Figjam, Miro, Adobe Illustrator, Adobe Photoshop</p>
            </div>
        </div>
        <figure className='grid grid-cols-3 gap-x-[4.7rem] self-end w-[600px] remove'>
            <img src={foodMainOne} alt="main-one" className='w-[300px] h-[500px] m-0'/>
            <img src={foodMainTwo} alt="main-two" className='w-[300px] h-[492px] m-0'/>
            <img src={foodMainThree} alt="main-three" className=' w-[150px] h-[492px] m-0'/>
            <img src={foodMainFour} alt="main-four" className='w-[300px] m-0'/>
            <img src={foodMainFive} alt="main-five" className='w-[300px] m-0'/>
        </figure>
        </section>
    </section>
  )
}
