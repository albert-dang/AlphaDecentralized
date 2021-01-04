import logo from './coinlayer_logo.svg'
import './PoweredByCoinLayer.css'

export default function PoweredByCoinLayer(){
    return(
        <div className='CoinLayer-showcase'>
            <img src={logo} className='CoinLayer-logo' alt='coinlayer logo' href='https://coinlayer.com'/>
        </div>
    )
}