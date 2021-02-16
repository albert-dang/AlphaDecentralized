const{setData} = this.context

fetch(`https://dangitsal.pythonanywhere.com/api/redditstocks`)
.then(response => response.json())
.then((jsonData) => {
    console.log(JSON.stringify(jsonData))
    setData(jsonData)
})
.catch((error) => {
console.error(error)
})

import React, {Component} from 'react'
import RedditStocksContext from '../RedditStocksContext'

export default class RedditStocksLoader extends Component{
    static contextType = RedditStocksContext

    onSubmit = (e) => {
        e.preventDefault()
        const{setData} = this.context

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
        return(
            <div className='queryFormWrapper'>
                <form className='queryForm' onSubmit={this.onSubmit}>
                    <select name='assetClass' id='assetClass' value={assetClass} onChange={this.onChange}>
                        <option value='crypto'>Stocks</option>
                        <option value='stocks'>Crypto</option>
                    </select>
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