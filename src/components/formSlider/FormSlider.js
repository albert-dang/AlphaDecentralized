import React, {Component} from 'react'
import Slider from 'react-slick'
import CryptoForm from './CryptoForm'
import StockForm from './StockForm'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './FormSlider.css'
<link rel='stylesheet' href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>

export default class FormSlider extends Component{
    render(){
        const settings = {
            arrows: false,
            dots: false,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            speed: 785
        }
        return (
            <div className='FormSliderWrapper'>
                <button className='prevForm'><i class='fas fa-arrow-left'></i></button>
                <button className='nextForm'><i class='fas fa-arrow-right'></i></button>
                <Slider {...settings} className='FormSlider'>
                    <StockForm />
                    <CryptoForm />
                </Slider>
            </div>
        )
    }
}