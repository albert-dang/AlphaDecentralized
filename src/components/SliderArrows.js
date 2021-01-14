import React from 'react'
import {FaCaretLeft, FaCaretRight} from 'react-icons/fa'

export function SliderArrowPrev(){
    return(
        <FaCaretLeft className='arrowPrev'/>
    )
}

export function SliderArrowNext(){
    return(
        <FaCaretRight className='arrowNext'/>
    )
}