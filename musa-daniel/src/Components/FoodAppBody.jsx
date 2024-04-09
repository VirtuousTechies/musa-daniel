import React from 'react'
import { componentOne, componentThree, componentTwo, figma, foodAbout, foodMainFive, foodMainFour, foodMainOne, foodMainThree, foodMainTwo, foodProblem, screenFive, screenFour, screenOne, screenSix, screenThree, screenTwo, summary,} from '../Data'
import { FoodHeader } from '.'
import { foodAppData } from '../Data/demo'

export default function FoodAppBody() {
  return (
    <section className='flex flex-col space-y-20 md:justify-center md:items-center w-full'>
       <section className='flex flex-col space-y-20 md:justify-center md:items-center w-full 
    bg-[#121212]' >
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
       </section>
        <section className='flex md:justify-center md:items-center w-full bg-[#121212] py-20'>
            <section className='flex flex-col space-y-20 pl-5 md:pl-0 md:items-start w-[90%] md:w-[80%]'>
                <FoodHeader />
                <section className='grid grid-cols-1 lg:grid-cols-2 gap-32 w-full mx-5 md:mx-0'>
                    {foodAppData.about.map((item => <div key={item.heading} className='flex flex-col 
                    space-y-3 justify-start items-start'>
                        <h2 className='bg-gradient-to-l font-four text-3xl md:text-4xl font-extrabold 
                        text-transparent bg-clip-text to-[#F9881F] from-[#ED474A]'>{item.heading}</h2>
                        <p className='font-four font-extralight text-white text-base
                        md:w-[24rem]'>{item.text}</p>
                    </div>))}
                    <img src={foodAbout} alt="about" className='lg:-mt-32' />
                </section>
            </section>
        </section>
        <section className='flex flex-col space-y-20 md:items-start w-[90%] mx-5 md:mx-0 
        md:w-[80%] bg-[#17171717]'>
            <FoodHeader />
            <div className='flex flex-row justify-between w-full'>
                <div className='flex flex-col space-y-5'>
                    <h2 className='bg-gradient-to-l font-four text-3xl md:text-4xl font-extrabold 
                    text-transparent bg-clip-text to-[#F9881F] from-[#ED474A]'>Problem statement</h2>
                    <p className='font-four font-bold text-white 
                    text-base md:w-[30rem]'>Understanding the problem:</p>
                    <p className='font-four font-extralight text-white text-base md:w-[30rem]'>
                    There are plenty of food ordering apps on the market, but what makes 
                    <span className='text-white font-bold'> ChowXpress </span> stand out is 
                    the added feature of users being able to place special orders for food they 
                    see probably online but cant eat because of geographical challenges, and also 
                    interact with the vendors selling the food in real time and make enquiries.</p>
                </div>
                <img src={foodProblem} alt="problem" />
            </div>
        </section>
        <section className='flex flex-col space-y-20 md:items-start w-[90%] mx-5 md:mx-0 
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
        <div className='bg-[#98A2B3] w-[90%] md:w-[80%] h-[2px]'></div>
        <section className='flex flex-col space-y-20 md:items-start w-[90%] mx-5 md:mx-0 
        md:w-[80%] bg-[#17171717]'>
            <h2 className='bg-gradient-to-l font-four text-3xl md:text-4xl font-extrabold 
            text-transparent bg-clip-text to-[#F9881F] from-[#ED474A]'>Components</h2>
            <figure className='flex flex-col space-y-12'>
                <img src={componentOne} alt="component-one" />
                <img src={componentTwo} alt="component-two" />
                <img src={componentThree} alt="component-three" />
            </figure>
        </section>
        <section className='flex flex-col space-y-20 md:items-start w-[90%] mx-5 md:mx-0 
        md:w-[80%] bg-[#17171717]'>
            <FoodHeader />
            <h2 className='bg-gradient-to-l font-four text-3xl md:text-4xl font-extrabold 
            text-transparent bg-clip-text to-[#F9881F] from-[#ED474A]'>Summary</h2>
            <div className='flex flex-col-reverse space-y-reverse space-y-5 lg:space-y-0 items-center 
            lg:items-start lg:flex-row lg:justify-between lg:w-[inherit]'>
               <div className='flex flex-col space-y-10 self-end lg:self-auto'>
                {foodAppData.summary.map((text => <p key={text} className='font-extralight font-four 
                text-lg lg:w-[18rem] xl:w-[30rem]'>{text}</p>))}
               </div>
                <img src={summary} alt="summary" className='self-end' />
            </div>
        </section>
        <section className='flex flex-col w-full bg-[#03071E] px-5 py-10'>
            <FoodHeader />
           <div className='self-center flex flex-col w-full justify-center items-center 
           h-[20rem] space-y-5'>
                <h2 className='bg-gradient-to-l font-four text-3xl md:text-4xl font-extrabold 
                text-transparent bg-clip-text to-[#F9881F] from-[#ED474A]'>Thank you for
                reading</h2>
                <p className='text-center font-four font-extralight text-[#98A2B3] 
                text-lg md:w-[30rem]'>I trully appreciate you checking out my study, 
                I’d love to hear your feedback.</p>
           </div>
        </section>
    </section>
  )
}
 