import logo from './slick_logo.svg'
import './PoweredBySlick.css'

export default function PoweredBySlick(){
    return(
        <a href='https://kenwheeler.github.io/slick/' rel='noreferrer' target='_blank'>
            <div className='Slick-showcase'>
                <img src={logo} className='Slick-logo' alt='slick logo'/>
            </div>
        </a>
    )
}