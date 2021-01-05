import logo from './coinlayer_logo.svg'
//import './PoweredByCoinLayer.css'

export default function PoweredByCoinLayer(){
    return(
        <a href='https://coinlayer.com' target='_blank'>
            <div className='CoinLayer-showcase'>
                <img src={logo} className='CoinLayer-logo' alt='coinlayer logo'/>
            </div>
        </a>
    )
}