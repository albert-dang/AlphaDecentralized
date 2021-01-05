import React, {Component} from 'react'
import Slider from 'react-slick'
import PoweredByCoinLayer from './PoweredByCoinLayer'
import PoweredByPandas from './PoweredByPandas'
import PoweredByReact from './PoweredByReact'
import './ShowcaseContainer.css'

export default class ShowcaseContainer extends Component{
    render(){
        const settings = {
            autoplay: true,
            autoplaySpeed: 315,
            dots: false,
            infinite: true,
            speed: 315,
            slidesToShow: 1,
            slidesToScroll: 1,
        }
        return (
            <Slider {...settings}>
                <div>
                    <PoweredByReact />
                </div>
                <div>
                    <PoweredByCoinLayer />
                </div>
                <div>
                    <PoweredByPandas />
                </div>
            </Slider>
        )
    }
}