import React, {useContext} from 'react'
import RedditStocksReportContext from '../RedditStocksReportContext'
import './RedditStocksReport.css'

const RedditStocks = () => {
  const report = useContext(RedditStocksReportContext)

  return (
    <div className = 'redditStocksBody' style={{marginTop: '30px'}}>
      <div className = 'tickersColumn'>      
        <p>1: {report.data['0']}</p>
        <p>2: {report.data}</p>
        <p>3: {report.data}</p>
        <p>4: {report.data}</p>
        <p>5: {report.data}</p>
        <p>6: {report.data}</p>
        <p>7: {report.data}</p>
        <p>8: {report.data}</p>
        <p>9: {report.data}</p>
        <p>10: {report.data}</p>
      </div>
      <div className = 'mentionsColumn'>
        <p>{report.data}</p>
        <p>{report.data}</p>
        <p>{report.data}</p>
        <p>{report.data}</p>
        <p>{report.data}</p>
        <p>{report.data}</p>
        <p>{report.data}</p>
        <p>{report.data}</p>
        <p>{report.data}</p>
        <p>{report.data}</p>
      </div>
    </div>
  )
}

export default RedditStocks;