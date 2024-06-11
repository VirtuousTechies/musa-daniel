import React from 'react'
import { up } from '../Data'

export default function BottomBar() {
    const [show, setShow] = React.useState(false)
    const [scroll, setScroll] = React.useState(false)

    React.useEffect(() => {
        window.scrollY !== 0 ? setShow(true) : setShow(false)
    }, [scroll])

    window.onscroll = () => {
        if(window.scrollY !== 0) {
            setScroll(true)
        } else {
            setScroll(false)
        }
    }

  return (
    show ? <div className='self-end rounded-full sticky bottom-10 left-0 right-10 bg-[#27AE60] w-max p-4 
    shadow-md bg-opacity-70 cursor-pointer bbar' 
    onClick={() => window.scrollTo({top:0,left:0, behavior: "smooth"})}>
        <img src={up} alt="up-icon" className='mx-auto w-[25px]' />
    </div> :  null
  )
}
