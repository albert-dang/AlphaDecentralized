import logo from './coinlayer_logo.svg'
import './PoweredByCoinLayer.css'

export default function PoweredByCoinLayer(){
    return(
        <div className='CoinLayer-showcase'>
            <a href='https://coinlayer.com'>
                <img src={logo} className='CoinLayer-logo' alt='coinlayer logo'/>
            </a>
            
        </div>
    )
}