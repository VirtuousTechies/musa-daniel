import React from 'react'
import { chat, componentOne, componentThree, componentTwo, favourite, figma, flag, foodAbout, foodMainFive, foodMainFour, foodMainOne, foodMainThree, foodMainTwo, foodProblem, ordering, screenFive, screenFour, screenOne, screenSix, screenThree, screenTwo, special, summary, tracking, vendor,} from '../Data'
import { Convergence, FoodHeader, JourneyMap } from '.'
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
                <section className='grid grid-cols-1 lg:grid-cols-2 gap-32 w-full mx-5 md:mx-auto lg:mx-0'>
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
            <div className='flex flex-col-reverse space-y-reverse space-y-5 md:space-y-0 md:flex-row 
            md:justify-between w-full'>
                <div className='flex flex-col'>
                    <h2 className='bg-gradient-to-l font-four text-3xl md:text-4xl font-extrabold 
                    text-transparent bg-clip-text to-[#F9881F] from-[#ED474A] mb-5'>Problem statement</h2>
                    <p className='font-four font-bold text-white 
                    text-base mb-2'>Understanding the problem:</p>
                    <p className='font-four font-extralight text-white text-base md:w-[20rem] 
                    lg:w-[24.5rem]'>
                    There are plenty of food ordering apps on the market, but what makes 
                    <span className='text-white font-bold'> ChowXpress </span> stand out is 
                    the added feature of users being able to place special orders for food they 
                    see probably online but cant eat because of geographical challenges, and also 
                    interact with the vendors selling the food in real time and make enquiries.</p>
                </div>
                <img src={foodProblem} alt="problem" className='md:max-w-[40%] lg:max-w-[50%] 
                xl:max-w-full' />
            </div>
        </section>

        <section className='flex flex-col space-y-20 md:items-start w-[90%] mx-5 md:mx-0 
        md:w-[80%] bg-[#17171717]'>
            <FoodHeader end={'Design process'} />
            <div className='flex flex-col-reverse space-y-reverse space-y-5 md:space-y-0 md:flex-row 
            md:justify-between w-full'>
                <div className='flex flex-col self-start'>
                    <h2 className='bg-gradient-to-l font-four text-3xl md:text-4xl font-extrabold 
                    text-transparent bg-clip-text to-[#F9881F] from-[#ED474A] mb-5'>Divergence</h2>
                    <p className='font-four font-bold text-white 
                    text-base mb-2'>Researching the Idea</p>
                    <p className='font-four font-extralight text-white text-base md:w-[20rem] 
                    lg:w-[24.5rem]'>
                    My divergence stage saw me researching food ordering apps and mechanism, with a keen 
                    analysis on popular choices such as Ubereats, Jumiafood, Chowdeck etc. <br />
                    One thing they all had in common was the unavailability of a direct interface 
                    between the user and the vendor of the food being ordered. </p>
                    <p className='font-four font-extralight text-white text-base md:w-[20rem] 
                    lg:w-[24.5rem] mt-5'>
                    Conventionally, this is widely accepted, however,
                    <span className='text-white font-bold'> ChowXpress </span> is different in the 
                    sense that it also serves as a medium for food vendors to take special orders 
                    and  interact with customers.</p>
                </div>
                <img src={flag} alt="problem" className='md:max-w-[40%] lg:max-w-[50%] 
                pt-40 self-end' />
            </div>
        </section>

        <section className='flex flex-col space-y-20 md:items-start w-[90%] mx-5 md:mx-0 
        md:w-[80%] bg-[#17171717]'>
            <FoodHeader end={'Design process'} />
            <div className='flex flex-col-reverse space-y-reverse space-y-5 md:space-y-0 md:flex-row 
            md:justify-between w-full'>
                <div className='flex flex-col self-start'>
                    <h2 className='bg-gradient-to-l font-four text-3xl md:text-4xl font-extrabold 
                    text-transparent bg-clip-text to-[#F9881F] from-[#ED474A] mb-5'>Divergence</h2>
                    <p className='font-four font-bold text-[#ED474A]
                    text-base mb-5'>Researching the Users</p>
                    <p className='font-four font-bold text-white 
                    text-base mb-2'>Market viability</p>
                    <p className='font-four font-extralight text-white text-base md:w-[20rem] 
                    lg:w-[24.5rem]'>
                    To test the market viability of this idea, I employed the use of a Quantitative 
                    research mechanism to see the likelihood of people to make use of 
                    <span className='text-white font-bold'> ChowXpress.</span><br />
                    In a short sample, taken before the commencement of this project, 
                    <span className='text-[#ED474A] font-bold'> 6 in 10 </span> persons order food that are 
                    advertised to them via social media platforms like Whatsapp or instagram, 
                    this points to a viable market for the solution 
                    <span className='text-white font-bold'> ChowXpress</span> offers. </p>
                    <p className='font-four font-extralight text-white text-base md:w-[20rem] 
                    lg:w-[24.5rem] mt-5'>Instead of users being limited to only what they can 
                    see in their closed circle, a wider world is opened to them to try many things 
                    from different vendors.</p>
                </div>
                <div className='flex flex-col self-center'>
                    <h2 className='bg-gradient-to-l font-four text-3xl md:text-4xl font-extrabold 
                    text-transparent bg-clip-text to-[#F9881F] from-[#ED474A] mb-2'>6 in 10 people</h2>
                    <p className='font-four font-bold text-white w-[12rem]
                    text-lg mb-5'>order food based on what they’ve seen on social media apps.</p>
                    <p className='font-four font-extralight text-white text-base md:w-[20rem] 
                    lg:w-[24.5rem] mt-5'>
                    After establishing the viability of this idea with users, I set out to sketch out 
                    concepts for what <span className='text-white font-bold'> ChowXpress </span>
                    would look like and what should be contained.</p>
                </div>
            </div>
        </section>

        <Convergence />

        <Convergence />

        <JourneyMap />

        <JourneyMap />

        <section className='flex flex-col space-y-20 md:items-start w-[90%] mx-5 md:mx-0 
        md:w-[80%] bg-[#17171717]'>
            <FoodHeader end={'App screens'}/>
            <div className='flex flex-col-reverse space-y-reverse space-y-5 lg:space-y-0 lg:flex-row 
            md:items-center lg:items-start lg:justify-between w-full'>
                <div className='flex flex-col space-y-5'>
                    <h2 className='bg-gradient-to-l font-four text-3xl md:text-4xl font-extrabold 
                    text-transparent bg-clip-text to-[#F9881F] from-[#ED474A] text-center 
                    xl:text-start'>Main page & ordering system</h2>
                    <p className='font-four font-extralight text-white text-lg  
                    lg:w-[29rem]'><span className='text-white font-bold'> ChowXpress </span> has a 
                    simple ordering system implemented into its feature, all users need to do is 
                    just browse to the food they would like, or search for it, click on the food to 
                    expand, input how many portions of the food they’d like and place the order. 
                    The system automatically places the order for them and they just wait for it 
                    to arrive.</p>
                </div>
                <img src={ordering} alt="problem" className='md:max-w-[50%]' />
            </div>
        </section>

        <section className='flex flex-col space-y-20 md:items-start w-[90%] mx-5 md:mx-0 
        md:w-[80%] bg-[#17171717]'>
            <FoodHeader end={'App screens'}/>
            <div className='flex flex-col-reverse space-y-reverse space-y-5 lg:space-y-0 lg:flex-row 
            md:items-center lg:items-start lg:justify-between w-full'>
                <div className='flex flex-col space-y-5'>
                    <h2 className='bg-gradient-to-l font-four text-3xl md:text-4xl font-extrabold 
                    text-transparent bg-clip-text to-[#F9881F] from-[#ED474A] md:text-center 
                    lg:text-start'>Order tracking</h2>
                    <p className='font-four font-extralight text-white text-lg
                    lg:w-[29rem]'>We also added a feature for users to track their orders via an embeded 
                    google manp i-frame and be able to place a call to the courier personnel . This is 
                    meant to drive a better user experience, so users can be in touch and abreast of 
                    their orders every step of the way.</p>
                </div>
                <img src={tracking} alt="problem" className='md:max-w-[50%]' />
            </div>
        </section>

        <section className='flex flex-col space-y-20 md:items-start w-[90%] mx-5 md:mx-0 
        md:w-[80%] bg-[#17171717]'>
            <FoodHeader end={'App screens'}/>
            <div className='flex flex-col-reverse space-y-reverse space-y-5 lg:space-y-0 lg:flex-row 
            md:items-center lg:items-start lg:justify-between w-full'>
                <div className='flex flex-col space-y-5'>
                    <h2 className='bg-gradient-to-l font-four text-3xl md:text-4xl font-extrabold 
                    text-transparent bg-clip-text to-[#F9881F] from-[#ED474A] md:text-center 
                    lg:text-start'>Add to favourites</h2>
                    <p className='font-four font-extralight text-white text-lg
                    lg:w-[29rem]'>There are times users just love a particular experience with food 
                    they ordered, that they just want more, or perhaps want it to be their new fav 
                    dish for a particular occassion. <br />
                    For this, I included a favourites feature, where users can save some dishes as 
                    favourites, to limit the number of favourites a person can have though, 
                    because you can only have so much favourites, we limited the number of dishes 
                    that can be saved as favourites to just 12.</p>
                </div>
                <img src={favourite} alt="problem" className='md:max-w-[50%]' />
            </div>
        </section>

        <section className='flex flex-col space-y-20 md:items-start w-[90%] mx-5 md:mx-0 
        md:w-[80%] bg-[#17171717]'>
            <FoodHeader end={'App screens'}/>
            <div className='flex flex-col-reverse space-y-reverse space-y-5 lg:space-y-0 lg:flex-row 
            md:items-center lg:items-start lg:justify-between w-full'>
                <div className='flex flex-col space-y-5'>
                    <h2 className='bg-gradient-to-l font-four text-3xl md:text-4xl font-extrabold 
                    text-transparent bg-clip-text to-[#F9881F] from-[#ED474A] md:text-center 
                    lg:text-start'>Special Order</h2>
                    <p className='font-four font-extralight text-white text-lg 
                    lg:w-[29rem]'>We acknolwedged the one of the  inefficiencies and gaps of many food 
                    delivery services whereby the catalogue, albeit plentiful, may just not be enough to 
                    satisfy some cravings. <br />
                    For this, we added the <span className='text-white font-bold'> Special Order </span> 
                    feature, where users can post a special order 
                    craving they have, all they need to do is give the order a name, give a brief 
                    description or even add a picture and post it, when someone can make the dish, 
                    they get notified and they finalise it all in the chat system.</p>
                    <p className='font-four font-bold text-[#ED474A] text-lg 
                    lg:w-[29.8rem] italic'>This order will be attended to by registered vendors on the app 
                    who can take special orders as a side gig, we built something for them too so, 
                    follow for more.</p>
                </div>
                <img src={special} alt="problem" className='md:max-w-[50%]' />
            </div>
        </section>

        <section className='flex flex-col space-y-20 md:items-start w-[90%] mx-5 md:mx-0 
        md:w-[80%] bg-[#17171717]'>
            <FoodHeader end={'App screens'}/>
            <div className='flex flex-col-reverse space-y-reverse space-y-5 lg:space-y-0 lg:flex-row 
            md:items-center lg:items-start lg:justify-between w-full'>
                <div className='flex flex-col space-y-5'>
                    <h2 className='bg-gradient-to-l font-four text-3xl md:text-4xl font-extrabold 
                    text-transparent bg-clip-text to-[#F9881F] from-[#ED474A] md:text-center 
                    lg:text-start'>Chat system</h2>
                    <p className='font-four font-extralight text-white text-lg
                    lg:w-[29rem]'>We also built in a chat system for users to be able to interact 
                    with vendors who accepted their special orders and also perhaps conduct other 
                    businesses like hiring for events if they like the vendor’s services, 
                    amongst others.</p>
                </div>
                <img src={chat} alt="problem" className='md:max-w-[50%]' />
            </div>
        </section>

        <section className='flex flex-col space-y-20 md:items-start w-[90%] mx-5 md:mx-0 
        md:w-[80%] bg-[#17171717]'>
            <FoodHeader end={'App screens'}/>
            <div className='flex flex-col-reverse space-y-reverse space-y-5 lg:space-y-0 lg:flex-row 
            md:items-center lg:items-start lg:justify-between w-full'>
                <div className='flex flex-col space-y-5'>
                    <h2 className='bg-gradient-to-l font-four text-3xl md:text-4xl font-extrabold 
                    text-transparent bg-clip-text to-[#F9881F] from-[#ED474A] md:text-center 
                    lg:text-start'>Vendor mode</h2>
                    <p className='font-four font-extralight text-white text-lg
                    lg:w-[29rem]'>This was built for the special order feature.
                    Vendors may register with Foodio, complete their KYC and have the vendor mode 
                    available to them. This would allow them accept special orders from users and 
                    make the deliveries for it. This would be an especially attractive market for 
                    food vendors who are usually left out of the food ordering ecosystem and rely only 
                    on orders gotten from their social media pages.</p>
                    <p className='font-four font-extralight text-white text-lg
                    lg:w-[29rem]'>To register as a vendor, the vendor needs to be confirmed as someone 
                    who actually sells food and has proof of it i.e social media handles, 
                    business registration etc.</p>
                    <p className='font-four font-extralight text-white text-lg
                    lg:w-[29rem]'>To <span className='text-white font-bold'> handle payments, </span> 
                    we added a feature for vendors to add a payment 
                    collector like paystack, flutterwave or payoneer for them to get paid.</p>
                </div>
                <img src={vendor} alt="problem" className='md:max-w-[50%]' />
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
 