import React, {Component} from 'react'
import Slider from 'react-slick'
import QueryForm from './QueryForm'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './FormSlider.css'

export default class FormSlider extends Component{
    render(){
        const settings = {
            arrows: false,
            dots: true,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            speed: 785
        }
        return (
            <div className='formSliderWrapper'>
                <Slider {...settings} className='formSlider'>
                    <QueryForm />
                </Slider>
            </div>
        )
    }
}