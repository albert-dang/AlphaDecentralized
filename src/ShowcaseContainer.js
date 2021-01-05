import PoweredByCoinLayer from './PoweredByCoinLayer'
import PoweredByPandas from './PoweredByPandas'
import PoweredByReact from './PoweredByReact'
import './ShowcaseContainer.css'

export default function ShowCaseContainer(){
    return(
        <div class='float-container'>
            <PoweredByReact />
            <PoweredByCoinLayer />
            <PoweredByPandas />
        </div>
    )
}