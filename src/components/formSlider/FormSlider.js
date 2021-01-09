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
            arrows: true,
            dots: false,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
        }
        return (
            <div className='SliderWrapper'>
                <Slider {...settings} className='FormSlider'>
                    <StockForm />
                    <CryptoForm />
                </Slider>
            </div>
        )
    }
}