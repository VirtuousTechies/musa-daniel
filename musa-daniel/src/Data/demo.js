import { adBlockerCover, airMaxCover, define, design, foodAppCover, hfOne, hfTwo, ideate, otherEight, otherFive, otherFour, otherNine, otherOne, otherSeven, otherSix, otherThree, otherTwo, pi, rideEaseCover, rideMainOne, rideMainTwo, test, understand, ura, ut } from "."

export const navItems = ['About me', 'Works', 'Contact me']
export const aboutParagraphs = ['Daniel is a seasoned product designer known for his innovative approach and passion for creating meaningful user experiences. With a deep understanding of user-centric design principles and a constant desire for growth, Daniel has played a pivotal role in shaping products that resonate with users and drive business success.', 'He has a very detailed understanding of how to conduct user research, he is an amazing storyteller with expertise in the use of typography, layout, and color in visual communication and I’m proficient in using major design tools like Figma, and Miro.', 'Daniel has experience building products for Fintech, Edutech, and the E-Commerce industry. I am keen on using design to solve and improve human problems, thereby focusing on creating human-centered designs that look modern, deliver effective conversion, and meet business goals and requirements.', 'When he is not designing, he read different resources on design, watch YouTube videos on different UX patterns and trends, and teach people how to become UI or UX designers which is a way for me to give back to my community by sharing my knowledge. When he want to relax, he watch movies and as a big football fan, he can be found watching football matches.His skills are but are not limited to conducting user research, storytelling, use of typography, layout, and color in visual communication, Design Thinking, Wireframing, and Prototyping. I’m also proficient in using most design tools like Figma.', 'Have an interesting project? He can help you.']
export const info = [
    {
        title:'Full Name',
        answer: 'Musa Daniel Ehrunmusele'        
    },
    {
        title:'Email Address',
        answer: 'Musaehrunmusele@gmail.com'        
    },
    {
        title:'Linkedln',
        answer: 'www.linkedin.com/in/ehrunmusele'        
    },
    {
        title:'Phone',
        answer: '+2348167092155'        
    },
]
export const whatIDo = [
    {
        title:'User Research',
        rest: ' & Analysis',
        img: ura       
    },
    {
        title:'Prototyping',
        rest: '& Interaction',
        img: pi        
    },
    {
        title:'Userbility',
        rest: 'Testing',
        img: ut       
    },
]
export const skills = [
    {
        title:'VISUAL DESIGN',
        percent: '90%'        
    },
    {
        title:'USER RESEARCH',
        percent: '80%'        
    },
    {
        title:'PROTOTYPING & WIREFRAMING',
        percent: '90%'        
    },
    {
        title:'INTERACTION DESIGN',
        percent: '85%'        
    },
]

export const getInTouchInput = [
    {
        type: 'text',
        placeHolder: 'Name'
    },
    {
        type: 'text',
        placeHolder: 'Last name'
    },
    {
        type: 'email',
        placeHolder: 'Email'
    },
    {
        type: 'text',
        placeHolder: 'Phone number'
    },
]

export const works = [
    {
        name: 'RIDE SHARING APP',
        img: rideEaseCover,
        description: 'RideEase is a mobile application that connects passengers with nearby drivers to provide quick and convenient transportation services. The app is designed to provide a seamless user experience for both drivers and passengers, with features that prioritize safety, reliability, and affordability.',
        type: 'App Design',
        link: 'rideEase'
    },
    {
        name: 'NIKE SHOE PRODUCT SCREEN',
        img: airMaxCover,
        description: 'RideEase is a mobile application that connects passengers with nearby drivers to provide quick and convenient transportation services. The app is designed to provide a seamless user experience for both drivers and passengers, with features that prioritize safety, reliability, and affordability.',
        type: 'Website Design'
    },
    {
        name: 'AD BLOCKER APP',
        img: adBlockerCover,
        description: 'This design case study showcases the successful creation of an Ad Blocker/VPN app that prioritizes user experience, privacy, and security. The integrated solution addresses user pain points and provides a valuable tool for those seeking a seamless and secure online browsing experience.',
        type: 'App Design',
        link: 'adBlocker'
    },
    {
        name: 'FOOD APP',
        img: foodAppCover,
        description: 'ChowXpress is an food ordering app for food lovers with a wide variety of catalogue offerings with an especial service of African cuisines, it gives users the option to place special orders to a suite of vendors and vendors who take the orders users place, and interact with each other in real time.',
        type: 'App Design',
        link: 'foodApp'
    },
]

export const designProcess = [
    {
        img: understand,
        title: 'Understand',
        description: ['User Research', 'User Interview', 'Competitve Analysis']
    },
    {
        img: define,
        title: 'Define',
        description: ['User Personas', 'Empathy Map', 'User Journey']
    },
    {
        img: ideate,
        title: 'Ideate',
        description: ['User Flow', 'Information Architecture']
    },
    {
        img: design,
        title: 'Design',
        description: ['Wireframe', 'Hi-Fi Designs', 'Prototype']
    },
    {
        img: test,
        title: 'Test',
        description: ['Feedbacks', 'Conclusion', 'Future Concept']
    },
]

export const adBlockerData = {
    productOverview: 'The goal of this design project is to create a comprehensive Ad Blocker and VPN app that provides users with a seamless and secure browsing experience. The app aims to block intrusive ads, enhance user privacy through VPN functionality, and offer an intuitive and user-friendly interface.',
    productStatement: 'Users often face intrusive ads while browsing, compromising both their privacy and user experience. Additionally, there is a growing concern about online privacy, making VPN functionality essential. The challenge is to design an integrated solution that effectively blocks ads and provides a reliable VPN service while maintaining a simple and user-centric design.',
    goals: ['Develop a user-friendly interface that caters to both novice and experienced users.', 'Prioritize user privacy and security in the VPN functionality.', "Efficiently block ads without compromising the website's functionality.", 'Ensure a seamless transition between ad-blocking and VPN features.'],
    userResearch: ['Conducted user interviews and surveys to understand user pain points related to online ads and privacy concerns.', 'Analyzed competitor apps to identify strengths, weaknesses, and opportunities for differentiation.', 'Researched the latest trends in ad-blocking technology and VPN services.']
}

export const targetAudience = {
    rideEase: ['Urban Dwellers: People living in densely populated areas where parking can be difficult to find and owning a car can be expensive.', 'Commuters: People who need to travel to and from work or school and want an alternative to public transportation.', 'Young Adults: People who may not have a car or who prefer not to own a car and are looking for an affordable transportation option.', 'Travelers: People who are visiting a new city and need a reliable transportation option to get around.'],
    adBlocker: [ ['Privacy-Conscious Users:', 'Individuals who prioritize their online privacy and seek tools to protect personal information from trackers and data collection.'], ['Tech-Savvy Professionals:', 'Professionals who use the internet for work and value a secure and uninterrupted browsing experience. They may be concerned about corporate espionage, data leaks, or unauthorized access to sensitive information.'], ['Frequent Travelers:', 'People who frequently travel and use public Wi-Fi networks, recognizing the need for a VPN to secure their internet connection and protect against potential threats.'], ['Digital Nomads:', 'Individuals who work remotely and rely heavily on the internet for their livelihood. They may prioritize both ad-blocking and VPN features for an efficient and secure online work environment.'] ]
}

export const rideEaseData = {
    productOverview: 'RideEase is a mobile application that connects passengers with nearby drivers to provide quick and convenient transportation services. The app is designed to provide a seamless user experience for both drivers and passengers, with features that prioritize safety, reliability, and affordability.',
    productStatement: 'Urban transportation can be unreliable, expensive, and unsafe, creating a need for a safe, convenient, and affordable ride-sharing app that meets the needs of modern consumers.',
    goals: 'To design and develop a ride-sharing app that simplifies the process of requesting and providing rides, efficiently matches passengers with drivers, incorporates safety features, and balances affordability for passengers with fair compensation for drivers. By achieving these goals, the app aims to improve the overall ride-sharing experience and address the transportation challenges faced by modern consumers.',
    productObjective: {
        text: 'The main objective of the project was to design and develop a ride-sharing app that would simplify the process of requesting and providing rides. The app needed to be easy to use, visually appealing, and functional across a variety of devices and operating systems. Key objectives included:',
        list:["Designing an intuitive user interface that would allow users to quickly and easily request a ride, track the driver's progress, and make payments.", "Developing a robust back-end system that would efficiently match passengers with drivers based on location and availability.", "Incorporating safety features such as driver background checks, GPS tracking, and emergency assistance options.", "Implementing a flexible pricing structure that would be affordable for passengers while providing fair compensation for drivers."]
    },
    userResearch:'I conducted user research to understand pain points that riders and drivers face when using the app. I interviewed riders and drivers, and conducted surveys to gather feedback on the current app. We also analyzed user reviews of the app in the app store.',
    competitiveAnalysis:{
        text:'This chart compares the features of the ride-sharing app with those of its competitors, including Uber, Lyft, and Grab. The features listed include in-app safety features, rewards programs, eco-friendly options, and seamless integration with public transportation. By examining the features offered by each competitor, the ride-sharing app can identify areas where it can differentiate itself and offer unique value to its users.',
        data: [
            {
                heading: 'Company Name',
                one: 'Uber',
                two: 'Lyft',
                three: 'RideEase'
            },
            {
                heading: 'In-app Safety Features',
                one: 'yes',
                two: 'yes',
                three: 'yes'
            },
            {
                heading: 'Rewards Program',
                one: 'yes',
                two: 'yes',
                three: 'yes'
            },
            {
                heading: 'Eco-Friendly Options',
                one: 'no',
                two: 'no',
                three: 'yes'
            },
            {
                heading: 'Seamless Integration with Public Transportation',
                one: 'no',
                two: 'no',
                three: 'yes'
            },
            {
                heading: 'Group Ride',
                one: 'no',
                two: 'yes',
                three: 'yes'
            },
        ]
    },
    quantitativeResearch: {
        text: 'We conducted a survey of 500 current ride-sharing users to gather quantitative data on their preferences and experiences with ride-sharing apps. The survey was conducted online and included questions on the following topics:',
        screeningCriteria: ['Use ride-sharing apps on a regular basis', 'Are between the ages of 18 and 60', 'Have access to a smartphone', "Live in an urban or suburban area with a high demand for ride-sharing services", "Have a valid driver's license and are comfortable using ride-sharing services as both a passenger and a driver (if the app includes a driver component)"],
        observations: [
            {
                percent: '75%',
                text: 'Frequency of use: We asked users how often they use ride-sharing apps, and found that 70% of respondents use a ride-sharing app at least once a week.'

            },
            {
                percent: '55% Uber, 35% Lyft',
                text: 'App preferences: We asked users which ride-sharing app they use most frequently, and found that 55% of respondents use Uber most often, while 35% use Lyft most often.'

            },
            {
                percent: '85%',
                text: 'Safety features: We asked users how important in-app safety features are to them when choosing a ride-sharing app, and found that 85% of respondents said that safety features are very important.'

            },
            {
                percent: '60%',
                text: 'Eco-friendly options: We asked users how likely they are to use a ride-sharing app that offers eco-friendly options, such as electric vehicles, and found that 60% of respondents said that they are very likely or somewhat likely to use such an app.'

            },
            {
                percent: '75%',
                text: 'Group ride options: We asked users if they would be interested in using a ride-sharing app that offers group ride options, and found that 75% of respondents said that they would be interested.'

            },

        ]
    },
    empathyMap: {
        says: ["I hate when the price surges during rush hour, it makes me feel like I'm being taken advantage of.", "I always check the license plate and driver information before getting into the car to make sure I'm safe.", "I wish there were more electric vehicles available for ride-sharing, it would make me feel better about my impact on the environment."],
        thinks: ['Frustrated with surge pricing during peak hours', 'Worries about safety when using ride-sharing apps at night', 'Wants to use eco-friendly transportation options when possible', 'Appreciates the convenience of ride-sharing for her daily commute'],
        does: ['Checks multiple ride-sharing apps to compare prices before booking a ride', 'Only uses ride-sharing apps during daylight hours when she feels safer', 'Regularly uses ride-sharing apps for her daily commute to avoid the stress and cost of driving in Chicago traffic.', 'Chooses eco-friendly ride-sharing options when they are available and affordable'],
        feels: ['Annoyed when her ride costs more than she expected due to surge pricing', 'Anxious about her safety when using ride-sharing apps at night', 'Guilty about contributing to environmental pollution when using ride-sharing apps', 'Grateful for the convenience and time-saving benefits of ride-sharing'],
    }
}

export const rideEaseScreens =[otherOne, otherNine, otherTwo, otherSix, otherFour, otherEight, otherThree, otherSeven, otherFive]
export const hf =[hfOne, otherEight, hfTwo]