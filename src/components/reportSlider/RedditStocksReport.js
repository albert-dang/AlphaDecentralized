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
          <p>Ticker</p>
          <p>{redditStocks.data[0]['ticker']}</p>
          <p>{redditStocks.data[1]['ticker']}</p>
          <p>{redditStocks.data[2]['ticker']}</p>
          <p>{redditStocks.data[3]['ticker']}</p>
          <p>{redditStocks.data[4]['ticker']}</p>
          <p>{redditStocks.data[5]['ticker']}</p>
          <p>{redditStocks.data[6]['ticker']}</p>
          <p>{redditStocks.data[7]['ticker']}</p>
          <p>{redditStocks.data[8]['ticker']}</p>
          <p>{redditStocks.data[9]['ticker']}</p>
        </div>
        <div className = 'mentionsColumn'>
          <p>Mentions (Diluted)</p>
          <p>{redditStocks.data[0]['mentions']}</p>
          <p>{redditStocks.data[1]['mentions']}</p>
          <p>{redditStocks.data[2]['mentions']}</p>
          <p>{redditStocks.data[3]['mentions']}</p>
          <p>{redditStocks.data[4]['mentions']}</p>
          <p>{redditStocks.data[5]['mentions']}</p>
          <p>{redditStocks.data[6]['mentions']}</p>
          <p>{redditStocks.data[7]['mentions']}</p>
          <p>{redditStocks.data[8]['mentions']}</p>
          <p>{redditStocks.data[9]['mentions']}</p>
        </div>
      </div>
    </div>
  )
}

export default RedditStocks