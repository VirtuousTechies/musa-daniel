import React from 'react'
import { Heading } from './'

export default function TargetAudience(props) {
  return (
    <section className='flex flex-row justify-between'>
        <div className='flex flex-col space-y-2'>
            <Heading text={'Target Audience'}/>
            <ol className='flex flex-col space-y-2 list-decimal'>
                {props.data.map((item) => <li key={props.ride ? item : item[0]}>
                    {props.ride ? <span>{item}</span> 
                    : <div>
                        <span>{item[0]}</span>
                        <ol className='list-disc'>
                            <li>{item[1]}</li>
                        </ol>
                    </div>} </li> 
                ) }
            </ol>
        </div>
        <img src={props.img} alt="target-audience-img" />
    </section>
  )
}
