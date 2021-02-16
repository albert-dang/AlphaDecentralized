import React, {useContext} from 'react'
import RedditStocksContext from '../RedditStocksContext'
import './RedditStocksReport.css'

const RedditStocks = () => {
  var objToday = new Date(),
  weekday = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'),
  dayOfWeek = weekday[objToday.getDay()],
  domEnder = function() { var a = objToday; if (/1/.test(parseInt((a + "").charAt(0)))) return "th"; a = parseInt((a + "").charAt(1)); return 1 == a ? "st" : 2 == a ? "nd" : 3 == a ? "rd" : "th" }(),
  dayOfMonth = today + ( objToday.getDate() < 10) ? '0' + objToday.getDate() + domEnder : objToday.getDate() + domEnder,
  months = new Array('January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'),
  curMonth = months[objToday.getMonth()],
  curYear = objToday.getFullYear()
  var today = '9AM ' + dayOfWeek + ' ' + dayOfMonth + ' of ' + curMonth + ', ' + curYear

  const redditStocks = useContext(RedditStocksContext)

  return (
    <div className = 'redditStocksWrapper'>
      <h3>Top Mentioned Stocks on Reddit (24 Hours)</h3>
      <p>{today}</p>
      <div className = 'redditStocksBody' style={{marginTop: '24x'}}>
        <div className = 'tickersColumn'>
          <p>1: {JSON.stringify(redditStocks.data)}</p>
          <p>2: {redditStocks.data}</p>
          <p>3: {redditStocks.data}</p>
          <p>4: {redditStocks.data}</p>
          <p>5: {redditStocks.data}</p>
          <p>6: {redditStocks.data}</p>
          <p>7: {redditStocks.data}</p>
          <p>8: {redditStocks.data}</p>
          <p>9: {redditStocks.data}</p>
          <p>10: {redditStocks.data}</p>
        </div>
        <div className = 'mentionsColumn'>
          <p>{redditStocks.data}</p>
          <p>{redditStocks.data}</p>
          <p>{redditStocks.data}</p>
          <p>{redditStocks.data}</p>
          <p>{redditStocks.data}</p>
          <p>{redditStocks.data}</p>
          <p>{redditStocks.data}</p>
          <p>{redditStocks.data}</p>
          <p>{redditStocks.data}</p>
          <p>{redditStocks.data}</p>
        </div>
      </div>
    </div>
  )
}

export default RedditStocks