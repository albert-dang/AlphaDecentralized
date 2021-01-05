import logo from './Pandas_logo.svg'
//import './PoweredByPandas.css'

export default function PoweredByPandas(){
    return(
        <a href='https://pandas.pydata.org/' target='_blank'>
            <div className='Pandas-showcase'>
                <img src={logo} className='Pandas-logo' alt='Pandas logo'/>
            </div>
        </a>
    )
}