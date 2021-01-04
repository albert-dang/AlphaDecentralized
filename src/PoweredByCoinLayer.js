import logo from './coinlayer_logo.svg'
import './PoweredByCoinLayer.css'

export default function PoweredByCoinLayer(){
    return(
        <div className='CoinLayer-showcase'>
            <img src={logo} className='CoinLayer-logo' alt='coinlayer logo' />
            <a
                className='App-link'
                href='https://coinlayer.com'
                target='_blank'
                rel='noopener noreferrer'
            >
                coinlayer
            </a>
        </div>
    )
}