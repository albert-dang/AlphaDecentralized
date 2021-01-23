import React, {Component} from 'react'
import ReportContext from '../ReportContext'
import './QueryForm.css'

export default class CryptoForm extends Component{
    static contextType = ReportContext

    constructor(){
        super()
        this.state = {
            symbol: 'BTC, ETH, XLM'
        }
    }

    onChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    onSubmit = (e) => {
        e.preventDefault()
        const{setData} = this.context
        const{symbol} = this.state
        const url = `https://dangitsal.pythonanywhere.com/api/fullsheet?coin=${symbol}`

        fetch(url)
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
                    <h1>Crypto</h1>
                    <label className='SymbolLabel'>
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