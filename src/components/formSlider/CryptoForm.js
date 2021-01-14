import React, {Component} from 'react'
import axios from 'axios'
import './QueryForm.css'

export default class CryptoForm extends Component{
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
        const{symbol} = this.state

        const listAssets = async () => {
            try {
                const res = await axios.get('https://dangitsal.pythonanywhere.com/api/fullsheet')
                console.log(res.data)
        
            } catch (err) {
                console.error(err)
            }
        }
        listAssets()

        axios.post('/', {symbol})
            .then((result) => {
                //Access results
            })
    }

    render(){
        const{symbol} = this.state
        return(
            <div className='QueryFormWrapper'>
                <form className='QueryForm' onSubmit={this.onSubmit}>
                    <h1>Crypto</h1>
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