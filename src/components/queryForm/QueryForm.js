import React, {Component} from 'react'
import FundamentalReportContext from '../FundamentalReportContext'
import './QueryForm.css'

export default class QueryForm extends Component{
    static contextType = FundamentalReportContext

    constructor(){
        super()
        this.state = {
            symbol: 'GOOGL'
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

        fetch(`https://dangitsal.pythonanywhere.com/api/${assetClass}?symbol=${symbol}`)
            .then(response => response.json())
            .then((jsonData) => {
                console.log(JSON.stringify(jsonData))
                setData(jsonData)
            })
            .catch((error) => {
            console.error(error)
            })
    }

    render(){
        const{symbol} = this.state.symbol
        return(
            <div className='queryFormWrapper'>
                <form className='queryForm' onSubmit={this.onSubmit}>
                    <label className='symbolLabel'>
                        Symbol:
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