import React, {Component} from 'react'
import Slider from 'react-slick'
import MetricsReport from './MetricsReport'
import './ReportSlider.css'

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
                        <MetricsReport />
                    </div>
                </Slider>
            </div>
        )
    }
}