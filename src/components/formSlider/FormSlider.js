import React, {Component} from 'react'
import Slider from 'react-slick'
import CryptoForm from './CryptoForm'
import StockForm from './StockForm'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './FormSlider.css'

export default class FormSlider extends Component{
    render(){
        const settings = {
            adaptiveHeight: true,
            arrows: true,
            dots: false,
            infinite: true,
            nextArrow: <i class="icon fa-arrow-right nextForm"></i>,
            prevArrow: <i class="icon fa-arrow-left prevForm"></i>,
            slidesToShow: 1,
            slidesToScroll: 1,
            speed: 785
        }
        return (
            <div className='FormSliderWrapper'>
                <Slider {...settings} className='FormSlider'>
                    <StockForm />
                    <CryptoForm />
                </Slider>
            </div>
        )
    }
}