import logo from './zipline-logo.png'
import './PoweredByZipline.css'

export default function PoweredByZipline(){
    return(
        <a href='https://www.zipline.io/' rel='noreferrer' target='_blank'>
            <div className='Zipline-showcase'>
                <img src={logo} className='Zipline-logo' alt='Zipline logo'/>
            </div>
        </a>
    )
}