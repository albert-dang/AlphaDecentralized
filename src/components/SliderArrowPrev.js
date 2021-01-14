import React from 'react'
import {FaCaretLeft} from 'react-icons/fa'

export default function SliderArrowPrev(){
    return(
        <g transform="translate(20,2.5)">
            <FaCaretLeft className='arrowPrev' size='32px' style={{fill: '#423baa'}}/>
        </g>
    )
}