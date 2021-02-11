import React, {Component} from 'react'
import Slider from 'react-slick'
import PoweredByPandas from './PoweredByPandas'
import PoweredByReact from './PoweredByReact'
import PoweredByZipline from './PoweredByZipline'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './ShowcaseSlider.css'

export default class ShowcaseSlider extends Component{
    render(){
        const settings = {
            arrows: false,
            autoplay: true,
            autoplaySpeed: 1618,
            dots: false,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
        }
        return (
            <div className='sliderWrapper'>
                <Slider {...settings} className='showcaseSlider'>
                    <div>
                        <PoweredByReact />
                    </div>
                    <div>
                        <PoweredByPandas />
                    </div>
                    <div>
                        <PoweredByZipline />
                    </div>
                </Slider>
            </div>
        )
    }
}