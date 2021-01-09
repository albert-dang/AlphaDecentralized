import React, {Component} from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './Report.css'

export default class ShowcaseSlider extends Component{
    render(){
        const settings = {
            dots: true,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
        }
        return (
            <div className='ReportWrapper'>
                <Slider {...settings} className='ReportSlider'>
                    <h2>Signals</h2>
                    <h2>Indicators</h2>
                    <h2>Metrics</h2>
                </Slider>
            </div>
        )
    }
}