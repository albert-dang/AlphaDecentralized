import React from 'react'
import './RedditStocksReport.css'

var redditStocks

fetch(`https://dangitsal.pythonanywhere.com/api/redditstocks`)
.then(response => response.json())
.then((jsonData) => {
    console.log(JSON.stringify(jsonData))
    redditStocks = jsonData
})
.catch((error) => {
console.error(error)
})

export default function RedditStocksReport(){
  return (
    <div className = 'redditStocksBody' style={{marginTop: '30px'}}>
      <div className = 'tickersColumn'>      
        <p>1: {redditStocks}</p>
        <p>2: {redditStocks}</p>
        <p>3: {redditStocks}</p>
        <p>4: {redditStocks}</p>
        <p>5: {redditStocks}</p>
        <p>6: {redditStocks}</p>
        <p>7: {redditStocks}</p>
        <p>8: {redditStocks}</p>
        <p>9: {redditStocks}</p>
        <p>10: {redditStocks}</p>
      </div>
      <div className = 'mentionsColumn'>
        <p>{redditStocks}</p>
        <p>{redditStocks}</p>
        <p>{redditStocks}</p>
        <p>{redditStocks}</p>
        <p>{redditStocks}</p>
        <p>{redditStocks}</p>
        <p>{redditStocks}</p>
        <p>{redditStocks}</p>
        <p>{redditStocks}</p>
        <p>{redditStocks}</p>
      </div>
    </div>
  )
}