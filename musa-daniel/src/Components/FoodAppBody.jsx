import React from 'react'
import { figma, foodMainFive, foodMainFour, foodMainOne, foodMainThree, foodMainTwo, screenFive, screenFour, screenOne, screenSix, screenThree, screenTwo,} from '../Data'
import { DesignProcess, FoodHeader } from '.'

export default function FoodAppBody() {
  return (
    <section className='flex flex-col space-y-20 md:justify-center md:items-center w-full 
    bg-[#121212]'>
        <div className='flex pl-5 items-center md:self-end bg-gradient-to-l to-[#F9881F]
         from-[#ED474A] md:w-[400px] lg:w-[685px] h-[60px]'>
            <p className='self-center text-xl font-four font-extrabold'>Case Study</p>
        </div>
        <section className='flex flex-col-reverse space-y-reverse -space-y-16 md:-space-y-0
        md:flex-row md:justify-between px-3 md:px-0 w-full'>
        <div className='flex flex-col space-y-10 mx-auto md:pl-5 lg:pl-0 pt-32'>
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
                <div className='self-center md:self-start rounded-full p-2 bg-[#FFB547] 
                w-max'>
                <img src={figma} alt="figma" className='mx-auto w-[30px]'/>
                </div>
                <p className='text-center md:text-start font-four font-extrabold'>Tools: <br /> 
                Figma, Figjam, Miro, Adobe Illustrator, Adobe Photoshop</p>
            </div>
        </div>
        <figure className='grid grid-cols-3 space-y-0 gap-x-[1.5rem] md:gap-x-[1.0rem] 
        lg:gap-x-[2.0rem] xl:gap-x-[4.7rem] self-end w-full md:w-[500px] lg:w-[520px] 
        xl:w-[600px] remove'>
            <img src={foodMainOne} alt="main-one" className='w-[160px] md:w-[180px] 
            lg:w-[250px] xl:w-[300px] h-[300px] md:h-[400px] lg:h-[500px] m-0'/>
            <img src={foodMainTwo} alt="main-two" className='w-[160px] md:w-[180px] 
            lg:w-[250px] xl:w-[300px] h-[292px] md:h-[392px] lg:h-[492px] m-0'/>
            <img src={foodMainThree} alt="main-three" className='w-[110px] md:w-[120px] 
            lg:w-[150px] h-[292px] md:h-[392px] lg:h-[492px] m-0'/>
            <img src={foodMainFour} alt="main-four" className='w-[160px] md:w-[180px] 
            lg:w-[250px] xl:w-[300px] m-0'/>
            <img src={foodMainFive} alt="main-five" className='w-[160px] md:w-[180px] 
            lg:w-[250px] xl:w-[300px] m-0'/>
        </figure>
        </section>
        <DesignProcess />
        <section className='flex flex-col space-y-20 md:items-start w-[90%] 
        md:w-[80%] bg-[#17171717]'>
            <FoodHeader end={'App screens'} />
            <h2 className='bg-gradient-to-l font-four text-3xl md:text-4xl font-extrabold 
            text-transparent bg-clip-text to-[#F9881F] from-[#ED474A]'>All screens</h2>
            <figure className='flex flex-col space-y-5'>
                <img src={screenOne} alt="screen-one" />
                <img src={screenTwo} alt="screen-two" />
                <img src={screenThree} alt="screen-three" />
                <img src={screenFour} alt="screen-four" />
                <img src={screenFive} alt="screen-five" />
                <img src={screenSix} alt="screen-six" />
            </figure>
        </section>
    </section>
  )
}
