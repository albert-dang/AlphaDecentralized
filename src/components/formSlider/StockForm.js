import React, {Component} from 'react'
import axios from 'axios'
import './QueryForm.css'

export default class StockForm extends Component{
    constructor(){
        super()
        this.state = {
            symbol: 'FB, AMZN, NFLX, GOOG'
        }
    }

    onChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    onSubmit = (e) => {
        e.preventDefault()
        const{symbol} = this.state

        axios.post('/', {symbol})
            .then((result) => {
                //Access results
            })
    }

    render(){
        const{symbol} = this.state
        return(
            <div className='QueryPadder'>
                <form className='QueryForm' onSubmit={this.onSubmit}>
                    <h1>Stocks (NYSE)</h1>
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