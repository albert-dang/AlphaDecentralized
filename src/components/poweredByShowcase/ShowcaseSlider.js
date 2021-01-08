import React, {Component} from 'react'
import Slider from 'react-slick'
import PoweredByCoinLayer from './PoweredByCoinLayer'
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
            <Slider {...settings} className='ShowcaseSlider'>
                <div>
                    <PoweredByReact />
                </div>
                <div>
                    <PoweredByCoinLayer />
                </div>
                <div>
                    <PoweredByPandas />
                </div>
                <div>
                    <PoweredByZipline />
                </div>
            </Slider>
        )
    }
}