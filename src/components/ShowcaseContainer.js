import PoweredByCoinLayer from './poweredByShowcase/PoweredByCoinLayer'
import PoweredByPandas from './poweredByShowcase/PoweredByPandas'
import PoweredByReact from './poweredByShowcase/PoweredByReact'
import './ShowcaseContainer.css'

export default function ShowCaseContainer(){
    return(
        <div class='Showcase-container'>
            <PoweredByReact />
            <PoweredByCoinLayer />
            <PoweredByPandas />
        </div>
    )
}