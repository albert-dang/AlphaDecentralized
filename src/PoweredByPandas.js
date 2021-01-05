import logo from './Pandas_logo.svg'
import './PoweredByPandas.css'

export default function PoweredByPandas(){
    return(
        <div className='Pandas-showcase'>
            <a href='https://pandas.pydata.org/'>
                <img src={logo} className='Pandas-logo' alt='Pandas logo'/>
            </a>
            
        </div>
    )
}