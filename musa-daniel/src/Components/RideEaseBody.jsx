import React from 'react'
import { base, cancel, dotDesign, foundation, iconography, pain, rideCursor, rideGoal, rideMainOne, rideMainTwo, rideOne, rideTarget, 
    sarah, 
    sarah2, 
    sketchFour, 
    sketchOne, 
    sketchThree, 
    sketchTwo, 
    spine, 
tick, underline } from '../Data'
import DesignProcess from './DesignProcess'
import { Empathy, Heading, TargetAudience } from '.'
import { hf, rideEaseData, rideEaseScreens, targetAudience } from '../Data/demo'

export default function RideEaseBody() {
  return (
    <section className='flex flex-col justify-center items-center w-full'>
        <section className='flex flex-col-reverse space-y-reverse space-y-10 md:space-y-0
        md:flex-row md:justify-between w-full px-5'>
            <div className='relative flex flex-col space-y-8 mx-auto md:mx-0 pt-20 lg:pt-44 
            md:pl-10'>
                <div className='flex flex-col space-y-2'>
                    <h2 className='font-five font-bold text-2xl md:text-xl lg:text-4xl'>
                    RideEase</h2>
                    <p className='font-three text-lg md:text-sm lg:text-2xl font-medium'>
                    A Ride-Sharing App</p>
                </div>
                <div className='flex flex-row lg:space-x-5 space-x-3'>
                    <div className='flex flex-col space-y-2'>
                        <p className='text-[#3676E0] font-three font-bold text-2xl md:text-xl 
                        lg:text-4xl'>Case Study</p>
                        <img src={underline} alt="underline" className='w-[12rem] lg:w-[13rem]'/>
                    </div>
                    <img src={rideCursor} alt="cursor" className='self-end w-[10.5rem] 
                    md:w-[9rem] lg:w-[12rem] xl:w-auto'/>
                </div>
            </div>
            <figure className='relative md:ml-5 lg:ml-0 xl:-ml-44'>
            <img src={rideMainOne} alt="main-one" className='w-[60%] md:w-[60%] xl:w-full'/>
            <img src={rideMainTwo} alt="main-two" className='absolute top-20 xl:top-32 
            left-[7.2rem] lg:left-[10.7rem] xl:left-[15.3rem] w-[60%] md:w-[60%] xl:w-full' />
            </figure>
            <img src={dotDesign} alt="dot-design" className='self-end md:self-start w-[60px] 
            lg:w-auto' />
    </section>
    <section className='flex flex-col-reverse space-y-reverse space-y-10 md:space-y-0 
      md:flex-row md:justify-between mx-5 md:mx-0 mt-28 lg:mt-52 xl:mt-60 md:w-[90%] xl:w-[80%]'>
        <div className='flex flex-col space-y-5'>
          <div className='flex flex-col space-y-2'>
            <Heading text={'Product Overview'}/>
            <p className='text-center md:text-start font-three font-normal tracking-tight 
            leading-6 text-base md:text-lg md:w-[90%]'>
            {rideEaseData.productOverview}</p>
          </div>
          <div className='flex flex-col'>
            <Heading text={'Product Objectives'}/>
            <p className='text-center md:text-start font-three font-normal tracking-tight 
            leading-6 text-base md:text-lg md:w-[92%]'>{rideEaseData.productObjective.text}</p>
            <ol className='list-disc mx-5 md:mx-0 md:ml-8 mt-8'>
                {rideEaseData.productObjective.list.map((info => <li key={info} className='
                font-three font-normal tracking-tight leading-6 text-base md:text-lg lg:w-[90%]'>
                {info}</li>))}
            </ol>
          </div>
        </div>
        <img src={rideOne} alt="phone-image" className='self-center w-[60%] 
        md:w-[12rem] lg:w-full' />
    </section>
    <section className='flex flex-col space-y-10 md:space-y-0 md:flex-row md:justify-between 
    mx-5 md:mx-0 mt-20 md:w-[90%] xl:w-[80%]'>
        <img src={rideGoal} alt="phone-image" className='self-center w-[60%] 
        md:w-[12rem] lg:w-[20rem]' />
        <div className='flex flex-col space-y-5 w-[50%]'>
          <div className='flex flex-col space-y-2'>
            <Heading text={'Product Statement'}/>
            <p className='text-center md:text-start font-three font-normal tracking-tight 
            leading-6 text-base md:text-lg md:w-[88%]'>
            {rideEaseData.productStatement}</p>
          </div>
          <div className='flex flex-col space-y-2'>
            <Heading text={'Goals'} width={true}/>
            <p className='text-center md:text-start font-three font-normal tracking-tight 
            leading-6 text-base md:text-lg md:w-[98%]'>
            {rideEaseData.goals}</p>
          </div>
        </div>
    </section>
    <DesignProcess />
    <TargetAudience ride={true} img={rideTarget} data={targetAudience.rideEase} />
    <section className='mt-20 flex flex-col space-y-2 mx-5 md:mx-0 md:w-[90%] xl:w-[80%]'>
        <Heading text={'User Research'}/>
        <p className='text-center md:text-start font-three font-normal tracking-tight 
        leading-6 text-base md:text-lg md:w-[88%]'>
        {rideEaseData.userResearch}</p>
    </section>
    <section className='mt-20 flex flex-col space-y-2 mx-5 md:mx-0 md:w-[90%] xl:w-[80%]'>
        <Heading text={'Competitive Analysis'}/>
        <p className='text-center md:text-start font-three font-normal tracking-tight 
        leading-6 text-base md:text-lg mx-5 md:mx-0 md:w-[88%]'>
        {rideEaseData.competitiveAnalysis.text}</p>
        <section className='flex flex-col space-y-3 overflow-y-scroll w-screen px-5 md:px-0 
        md:w-auto lg:overflow-y-hidden'>
            {rideEaseData.competitiveAnalysis.data.map((item => <div key={item.heading} 
            className='grid grid-cols-4 gap-5 md:gap-3 lg:gap-0 font-three font-medium 
            tracking-tight leading-6 text-base md:text-lg mt-10 w-max lg:w-auto'>
                <div className='flex items-center justify-center w-[210px] xl:w-[250px] 
                h-[90px] lg:h-[120px] bg-[#EBF3FE] rounded-[4.35px] text-[#193767] 
                font-semibold'>
                    <p className='text-center w-[80%]'>{item.heading}</p>
                </div>
                <div className='flex items-center justify-center w-[210px] xl:w-[250px] 
                h-[90px] lg:h-[120px] bg-[#F2F3F5] rounded-[4.35px] text-[#171717]'>
                    {item.one == 'yes' || item.one == 'no' ? <img src={item.one == 'yes' ? tick 
                    : cancel} className='w-[24px] md:w-[40px]' /> 
                    : <p className='text-center'>{item.one}</p>}
                </div>
                <div className='flex items-center justify-center w-[210px] xl:w-[250px] 
                h-[90px] lg:h-[120px] bg-[#F2F3F5] rounded-[4.35px] text-[#171717]'>
                    {item.two == 'yes' || item.two == 'no' ? <img src={item.two == 'yes' ? tick 
                    : cancel} className='w-[24px] md:w-[40px]' /> 
                    : <p className='text-center'>{item.two}</p>}
                </div>
                <div className='flex items-center justify-center w-[210px] xl:w-[250px] 
                h-[90px] lg:h-[120px] bg-[#F2F3F5] rounded-[4.35px] text-[#171717]'>
                    {item.three == 'yes' || item.three == 'no' ? <img src=
                    {item.three == 'yes' ? tick : cancel} className='w-[24px] md:w-[40px]' /> 
                    : <p className='text-center'>{item.three}</p>}
                </div>
            </div>))}
        </section>
    </section>
    <section className='mt-20 flex flex-col space-y-8 mx-5 md:mx-0 md:w-[90%] xl:w-[80%]'>
        <div>
            <Heading text={'Quantitative Research'}/>
            <p className='text-center md:text-start font-three font-normal tracking-tight 
            leading-6 text-base md:text-lg mx-5 md:mx-0 md:w-[88%] mt-3'>
            {rideEaseData.quantitativeResearch.text}</p>
        </div>
        <div className='flex flex-col'>
            <h2 className='font-three font-bold text-2xl mb-3'>Screening criteria</h2>
            {rideEaseData.quantitativeResearch.screeningCriteria.map((item) => <div className='
            flex flex-row space-x-2 items-center mt-2' key={item}>
                <div className='self-center w-[10.45px] bg-[#3676E0] h-[2px] rounded-sm'></div>
                <p className='text-center md:text-start font-three font-normal tracking-tight 
                leading-4 text-sm md:text-base mx-5 md:mx-0 md:w-[77%]'>{item}</p>
            </div>)}
        </div>
        <div className='flex flex-col'>
            <h2 className='font-three font-bold text-2xl mb-3'>Observations</h2>
            <section className='grid grid-cols-1 md:grid-cols-2 gap-12 text-center md:text-start'>
                {rideEaseData.quantitativeResearch.observations.map((item) => <div className='
                flex flex-col space-y-5 mt-2' key={item.text}>
                    <p className='font-three font-bold text-2xl text-[#3676E0]'>{item.percent}</p>
                    <p className='text-center md:text-start font-three font-normal tracking-tight 
                    leading-4 text-sm md:text-base mx-5 md:mx-0 md:w-[80%]'>{item.text}</p>
                </div>)}
            </section>
        </div>
    </section>
    <section className='mt-20 flex flex-col mx-5 md:mx-0 overflow-y-scroll md:overflow-hidden
    w-screen md:w-[90%] xl:w-[80%]'>
        <Heading text={'Empathy Map'} />
        <div className='flex flex-col mx-5 lg:mx-0 lg:ml-10 mt-10 -space-y-32 lg:-space-y-44 
        w-max md:w-full lg:w-auto'>
            <div className='flex flex-row -space-x-28 lg:-space-x-10'>
                <Empathy others={false} data={rideEaseData.empathyMap.says} text={'Says'}  />
                <figure className='flex flex-row space-x-2 items-center mt-64 lg:mt-52 xl:mt-32'>
                    <div className='bg-[#738198] w-[142.78px] h-[2px] rounded-[0.8px]'></div>
                    <div className='flex flex-col space-y-2 items-center'>
                        <div className='bg-[#738198] h-[142.78px] w-[2px] rounded-[0.8px]'></div>
                        <img src={sarah} alt="sarah" />
                        <div className='bg-[#738198] h-[142.78px] w-[2px] rounded-[0.8px]'></div>
                    </div>
                    <div className='bg-[#738198] w-[142.78px] h-[2px] rounded-[0.8px]'></div>
                </figure>
                <Empathy others={true} data={rideEaseData.empathyMap.thinks} text={'Thinks'} />
            </div>
            <div className='flex flex-row justify-between'>
                <Empathy others={true} data={rideEaseData.empathyMap.does} text={'Does'}/>
                <Empathy others={true} data={rideEaseData.empathyMap.feels} text={'Feels'}/>
            </div>
        </div>
    </section>
    <section className='mt-20 flex flex-col space-y-8 mx-5 md:mx-0 md:w-[90%] xl:w-[80%]'>
        <Heading text={'Pain Points'} />
        <div className='flex flex-col space-y-5 md:space-y-0 md:flex-row md:space-x-8 
        lg:space-x-24'>
            <img src={pain} alt="pain" className='w-[22rem] h-[25rem] self-center 
            lg:self-start lg:h-auto lg:w-auto' />
            <ol className='flex flex-col space-y-5'>
                {rideEaseData.painPoints.map((list => <li key={list.id} className='flex flex-col
                space-y-5'>
                    <div className='flex flex-row space-x-3 font-semibold text-xl'>
                        <p className='font-three text-[#3676E0] '>{list.id}.</p>
                        <p className='font-three text-white'>{list.heading}</p>
                    </div>
                    <p className='font-three font-normal tracking-tight 
                    leading-4 text-sm md:text-base text-white w-full 
                    lg:w-[78%]'>{list.text}</p>
                </li>))}
            </ol>
        </div>
    </section>
    <section className='mt-20 flex flex-col space-y-8 mx-5 md:mx-0 md:w-[90%] xl:w-[80%]'>
        <Heading text={'User Persona'} />
        <div className='flex flex-col space-y-5 md:space-y-0 md:flex-row md:space-x-5'>
            <div className='flex flex-col space-y-3 bg-[#EBF3FE] px-5 py-10 w-full md:w-[60%] lg:w-[30%] 
            rounded-md h-max '>
                <img src={sarah2} alt="sarah" />
                {rideEaseData.userPersona.card.map((item => <div className='flex flex-row 
                justify-between text-sm' key={item.title}>
                    <h2 className='text-[#193767] font-bold font-three'>{item.title}</h2>
                    <p className='text-black font-medium font-three'>{item.value}</p>
                </div>))}
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                <div className='col-span-1 md:col-span-2 rounded-md bg-[#EBF3FE] flex flex-col space-y-3 
                p-3 pl-5 md:w-max md:h-max'>
                    <h2 className='text-[#193767] text-base font-three font-bold'>Bio</h2>
                    <p className='text-black font-medium text-sm font-three w-full md:w-[23rem] lg:w-[36rem]'>{rideEaseData.userPersona.bio}</p>
                </div>
                <div className='col-span-1 rounded-md bg-[#EBF3FE] flex flex-col space-y-3 
                p-3 pl-5'>
                    <h2 className='text-[#193767] text-base font-three font-bold'>Pain points</h2>
                    {rideEaseData.userPersona.painPoints.map((item) => <div className='flex 
                    flex-row space-x-2 items-center mt-2 text-black' key={item}>
                        <div className='self-center w-[10.45px] bg-[#3676E0] h-[2px] rounded-sm'></div>
                        <p className='text-center md:text-start font-three font-medium tracking-tight 
                        text-sm mx-5 md:mx-0  md:w-[16rem] lg:w-[15rem]'>{item}</p>
                    </div>)}
                </div>
                <div className='col-span-1 rounded-md bg-[#EBF3FE] flex flex-col space-y-3 
                p-3 pl-5'>
                    <h2 className='text-[#193767] text-base font-three font-bold'>Goals</h2>
                    {rideEaseData.userPersona.goals.map((item) => <div className='flex 
                    flex-row space-x-2 items-center mt-2 text-black' key={item}>
                        <div className='self-center w-[10.45px] bg-[#3676E0] h-[2px] rounded-sm'></div>
                        <p className='text-center md:text-start font-three font-medium tracking-tight 
                        text-sm mx-5 md:mx-0 md:w-[16rem] lg:w-[15rem]'>{item}</p>
                    </div>)}
                </div>
            </div>
        </div>
    </section>
    <section className='mt-20 flex flex-col space-y-10 mx-5 md:mx-0 md:w-[90%] xl:w-[80%]'>
        <Heading text={'User Journey Map'} />
        <h2>Persona: Sarah</h2>
        <p><span>Goal:</span> Posuere eget sociis mauris dictum habitasse pharetra leo egestas pretium</p>
        <div className='flex flex-col space-y-5'>
            <div className='grid grid-cols-6'>
                <h2>Actions</h2>
                {rideEaseData.userJourney.actions.map((item => <p key={item}>{item}</p>))}
            </div>
            <div className='grid grid-cols-6 gap-5'>
                <h2>Task List</h2>
                {rideEaseData.userJourney.taskList.map((item => <ul key={item} className='flex 
                flex-col space-y-2 list-decimal'>
                   {item.map((list =>  <li key={list}>{list}</li>))}
                </ul>))}
            </div>
            <div className='grid grid-cols-6 gap-5'>
                <h2>Feeling</h2>
                {rideEaseData.userJourney.feeling.map((item => <img key={item} src={item}/>))}
            </div>
            <div className='grid grid-cols-6 gap-5'>
                <h2>Thoughts</h2>
                {rideEaseData.userJourney.thoughts.map((item => <p key={item}>{item}</p>))}
            </div>
        </div>
    </section>
    <section className='mt-20 flex flex-col space-y-10 mx-5 md:mx-0 md:w-[90%] xl:w-[80%]'>
        <Heading text={'Sketches/Low-fidelity Wireframes'} />
        <figure className='flex flex-col space-y-5'>
            <div className='flex flex-row w-[inherit]'>
                <img src={sketchOne} alt="one" className='max-w-[48%] lg:max-w-[49%]' />
                <img src={sketchTwo} alt="two" className='max-w-[48%] lg:max-w-[49%]'/>
            </div>
            <div className='flex flex-row space-x-5'>
                <img src={sketchThree} alt="three" className='max-w-[46%] lg:max-w-[49%]'/>
                <img src={sketchFour} alt="four" className='max-w-[46%] lg:max-w-[49%]' />
            </div>
        </figure>
    </section>
    <section className='mt-20 flex flex-col space-y-10 md:space-y-60 mx-5 md:mx-0 
    w-full md:w-[90%] xl:w-[80%]'>
        <Heading text={'High Fidelity Screen'} />
        <div className='relative w-full h-full px-5 py-10 md:p-0 lg:w-[60rem] 
        xl:w-[72rem] bg-[#3676E0] md:h-[280px] lg:h-[470px] xl:h-[529.33px] lg:-ml-5 
        xl:-ml-10'>
            <figure className='md:absolute -top-48 left-0 xl:left-8 grid grid-cols-1 gap-10 
            md:gap-y-0 md:grid-cols-3 md:gap-x-10'>
                {hf.map((src) => <img key={src} src={src} alt="screens" className='mx-auto' />)}
            </figure>
        </div>
    </section>
    <section className='mt-20 flex flex-col space-y-10 mx-5 md:mx-0 md:w-[90%] xl:w-[80%]'>
        <Heading text={'Other Screens'} />
        <figure className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20'>
            {rideEaseScreens.map((src) => <img key={src} src={src} alt="screens" />)}
        </figure>
    </section>
    <section className='mt-20 flex flex-col space-y-20 mx-5 md:mx-0 md:w-[90%] xl:w-[80%]'>
        <Heading text={'Style Guide'} />
        <div className='flex flex-col space-y-20'>
            <img src={base} alt="base" />
            <figure className='flex flex-col md:flex-row md:space-x-10'>
                <img src={foundation} alt="foundation" className='hidden md:block'/>
                <div className='md:self-end flex flex-col space-y-10'>
                    <p className='font-five text-[50px] lg:text-[80px]'>Iconography</p>
                    <img src={iconography} alt="iconography" />
                </div>
                <img src={spine} alt="spine" className='md:self-end hidden md:block' />
            </figure>
            <div className='flex flex-col space-y-5 py-5 pl-10 w-[inherit] bg-[#EDEBF5] 
            font-five rounded-md'>
                <h2 className='text-black font-extrabold text-xl'>Tools</h2>
                <div className='grid grid-cols-1 gap-y-5 md:gap-y-0 md:grid-cols-3 w-max'>
                    {rideEaseData.tools.map((item => <div key={item.heading} className='flex 
                    flex-col space-y-1 font-medium'>
                        <p className='text-[#738198] text-lg'>{item.heading}</p>
                        <ul className='flex flex-col space-y-1'>
                            {item.body.map((list => <li key={list} className='text-black 
                           text-sm'>{list}</li>))}
                        </ul>
                    </div>))}
                </div>
            </div>
        </div>
    </section>
  </section>
  )
}
