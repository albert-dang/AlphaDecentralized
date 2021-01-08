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
            <div className='QueryFormWrapper'>
                <form className='QueryForm' onSubmit={this.onSubmit}>
                    <label>Cryptocurrencies</label>
                    <label><a href='https://coinlayer.com/signup/free' rel='noreferrer' target='_blank'>Need a free API Key?</a></label>
                    <label className='CoinLayerKeyLabel'>
                        API Key:
                        <input type='text' name='apiKey' value={apiKey} onChange={this.onChange}/>
                    </label>
                    <label className='StartDateLabel'>
                        Start Date:
                        <input type='text' name='startDate' value={startDate} onChange={this.onChange}/>
                    </label>
                    <label className='EndDateLabel'>
                        End Date:
                        <input type='text' name='endDate' value={endDate} onChange={this.onChange}/>
                    </label>
                    <button className='QueryButton' type='submit'>
                        Query
                    </button>
                </form>
            </div>
        )
    }
}