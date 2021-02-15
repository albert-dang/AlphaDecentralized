import React, {useContext} from 'react'
import RedditStocksReportContext from '../RedditStocksReportContext'
import './RedditStocksReport.css'

const RedditStocks = () => {
  const report = useContext(RedditStocksReportContext)

  return (
    <div className = 'redditStocksBody' style={{marginTop: '30px'}}>
      <div className = 'tickersColumn'>      
        <p>1: {report.data['0'].ticker}</p>
        <p>2: {report.data['1'].ticker}</p>
        <p>3: {report.data['2'].ticker}</p>
        <p>4: {report.data['3'].ticker}</p>
        <p>5: {report.data['4'].ticker}</p>
        <p>6: {report.data['5'].ticker}</p>
        <p>7: {report.data['6'].ticker}</p>
        <p>8: {report.data['7'].ticker}</p>
        <p>9: {report.data['8'].ticker}</p>
        <p>10: {report.data['9'].ticker}</p>
      </div>
      <div className = 'mentionsColumn'>
        <p>1: {report.data['0'].mentions}</p>
        <p>2: {report.data['1'].mentions}</p>
        <p>3: {report.data['2'].mentions}</p>
        <p>4: {report.data['3'].mentions}</p>
        <p>5: {report.data['4'].mentions}</p>
        <p>6: {report.data['5'].mentions}</p>
        <p>7: {report.data['6'].mentions}</p>
        <p>8: {report.data['7'].mentions}</p>
        <p>9: {report.data['8'].mentions}</p>
        <p>10: {report.data['9'].mentions}</p>
      </div>
    </div>
  )
}

export default RedditStocks;