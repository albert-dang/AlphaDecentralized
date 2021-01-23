import React, {Component} from 'react'
import ReportContext from '../ReportContext'
import './QueryForm.css'

export default class QueryForm extends Component{
    static contextType = ReportContext

    constructor(){
        super()
        this.state = {
            assetClass: 'crypto',
            symbol: 'BTC, ETH, XLM'
        }
    }

    onChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    onSubmit = (e) => {
        e.preventDefault()
        const{setData} = this.context
        const assetClass = this.state.assetClass
        const symbol = this.state.symbol

        fetch(`https://dangitsal.pythonanywhere.com/api/fullsheet?${assetClass}=${symbol}`)
            .then(response => response.json())
            .then((jsonData) => {
                console.log(JSON.stringify(jsonData))
                setData(JSON.stringify(jsonData))
            })
            .catch((error) => {
            console.error(error)
            })
    }

    render(){
        const{symbol} = this.state
        return(
            <div className='queryFormWrapper'>
                <form className='queryForm' onSubmit={this.onSubmit}>
                    <select name='assetClass' id='assetClass' value={assetClass} onChange={this.onChange}>
                        <option value='crypto'>Crypto</option>
                        <option value='stocks'>Stocks</option>
                    </select>
                    <label className='symbolLabel'>
                        Symbol(s):
                        <input type='text' name='symbol' value={symbol} onChange={this.onChange}/>
                    </label>
                    <div className='queryButtonWrapped'>
                        <button className='queryButton' type='submit'>
                            Analyze
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}