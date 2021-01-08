import React, {Component} from 'react'
import axios from 'axios'
import './CoinLayerForm.css'

export default class CoinLayerForm extends Component{
    constructor(){
        super()
        this.state = {
            apiKey: '',
            startDate: '',
            endDate: ''
        }
    }

    onChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    onSubmit = (e) => {
        e.preventDefault()
        const{apiKey, startDate, endDate} = this.state

        axios.post('/', {apiKey, startDate, endDate})
            .then((result) => {
                //Access results
            })
    }

    render(){
        const{apiKey, startDate, endDate} = this.state
        return(
            <div className='QueryPadder'>
                <form className='QueryForm' onSubmit={this.onSubmit}>
                    <h1>CryptoQ</h1>
                    <label><a href='https://coinlayer.com/signup/free' rel='noreferrer' target='_blank'>Need a free API Key?</a></label>
                    <label className='CoinLayerKeyLabel'>
                        API Key:
                        <input type='text' name='apiKey' value={apiKey} onChange={this.onChange}/>
                    </label>
                    <label className='StartDateLabel'>
                        Start Date (DD/MM/YYYY):
                        <input type='text' name='startDate' value={startDate} onChange={this.onChange}/>
                    </label>
                    <label className='EndDateLabel'>
                        End Date:
                        <input type='text' name='endDate' value={endDate} onChange={this.onChange}/>
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