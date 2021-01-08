import React, {Component} from 'react'
import axios from 'axios'
import './CryptoForm.css'

export default class CryptoForm extends Component{
    constructor(){
        super()
        this.state = {
            apiKey: 'c4b654682c080684f623cba908b1133a',
            symbol: 'BTC, ETH, XLM'
        }
    }

    onChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    onSubmit = (e) => {
        e.preventDefault()
        const{apiKey, symbol} = this.state

        axios.post('/', {apiKey, symbol})
            .then((result) => {
                //Access results
            })
    }

    render(){
        const{apiKey, symbol} = this.state
        return(
            <div className='QueryPadder'>
                <form className='QueryForm' onSubmit={this.onSubmit}>
                    <h1>Crypto</h1>
                    <label><a href='https://coinlayer.com/signup/free' rel='noreferrer' target='_blank'>Need a free API Key?</a></label>
                    <label className='CoinLayerKeyLabel'>
                        API Key:
                        <input type='text' name='apiKey' value={apiKey} onChange={this.onChange}/>
                    </label>
                    <label className='SymbolLabel'>
                        Symbol(s):
                        <input type='text' name='symbol' value={symbol} onChange={this.onChange}/>
                    </label>
                    <div className='QueryButtonWrapped'>
                        <button className='QueryButton' type='submit'>
                            Analyze
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}