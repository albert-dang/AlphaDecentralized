import logo from './enigmaco-logo.svg'
import './PoweredByEnigma.css'

export default function PoweredByEnigma(){
    return(
        <a href='https://www.enigma.co/' rel='noreferrer' target='_blank'>
            <div className='Enigma-showcase'>
                <img src={logo} className='Enigma-logo' alt='Enigma logo'/>
            </div>
        </a>
    )
}