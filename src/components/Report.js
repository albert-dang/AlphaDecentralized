import React, {Component} from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './Report.css'

export default class ShowcaseSlider extends Component{
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
                <Slider {...settings} className='ShowcaseSlider'>
                    <h2>Stonks 1</h2>
                    <h2>Stonks 2</h2>
                    <h2>Stonks 3</h2>
                </Slider>
            </div>
        )
    }
}