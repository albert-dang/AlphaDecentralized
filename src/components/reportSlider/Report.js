import React, {Component} from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './Report.css'

export default class ReportSlider extends Component{
    render(){
        const settings = {
            arrows: false,
            dots: true,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
        }
        return (
            <div className='reportWrapper'>
                <Slider {...settings} className='reportSlider'>
                    <div className='signals'>
                        <h2>Signals</h2>
                        <div className='signalsBody'></div>
                    </div>
                    <div className='indicators'>
                        <h2>Indicators</h2>
                        <div className='indicatorsBody'></div>
                    </div>
                    <div className='metrics'>
                        <h2>Metrics</h2>
                        <div className='metricsBody'></div>
                    </div>
                </Slider>
            </div>
        )
    }
}