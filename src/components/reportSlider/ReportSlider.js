import React, {Component} from 'react'
import Slider from 'react-slick'
import FundamentalReport from './FundamentalReport'
import RedditStocksReport from './RedditStocksReport'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
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
                    <div className='fundamentals'>
                        <h2>Fundamentals</h2>
                        <FundamentalReport className='fundamentalReport'/>
                    </div>
                    <div className='quantitative'>
                        <h2>Quantitative</h2>
                        <div className='quantitativeBody'>
                            <RedditStocksReport className='redditStocksReport'/>
                        </div>
                    </div>
                    <div className='indicators'>
                        <h2>Indicators</h2>
                        <div className='indicatorsBody'></div>
                    </div>
                </Slider>
            </div>
        )
    }
}