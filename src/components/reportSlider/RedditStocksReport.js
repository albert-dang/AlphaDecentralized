import React from 'react'
import './RedditStocksReport.css'

var objToday = new Date(),
	weekday = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'),
	dayOfWeek = weekday[objToday.getDay()],
	domEnder = function() { var a = objToday; if (/1/.test(parseInt((a + "").charAt(0)))) return "th"; a = parseInt((a + "").charAt(1)); return 1 == a ? "st" : 2 == a ? "nd" : 3 == a ? "rd" : "th" }(),
	dayOfMonth = today + ( objToday.getDate() < 10) ? '0' + objToday.getDate() + domEnder : objToday.getDate() + domEnder,
	months = new Array('January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'),
	curMonth = months[objToday.getMonth()],
	curYear = objToday.getFullYear()
var today = '9AM ' + dayOfWeek + ' ' + dayOfMonth + ' of ' + curMonth + ', ' + curYear;

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
      <p>{today}</p>
      <div className = 'tickersColumn'>
        {console.log(JSON.stringify(redditstocks))}
        <p>1: {JSON.stringify(redditStocks)}</p>
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