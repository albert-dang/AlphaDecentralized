import React, {useContext} from 'react'
import RedditStocksReportContext from '../RedditStocksReportContext'
import './RedditStocksReport.css'

const RedditStocks = () => {
  const report = useContext(RedditStocksReportContext)

  return (
    <div className = 'redditStocksBody' style={{marginTop: '30px'}}>
      <div className = 'tickersColumn'>      
        <p>1: {JSON.stringify(report.data)}</p>
        <p>2: {report.data['1']}</p>
        <p>3: {report.data['2']}</p>
        <p>4: {report.data['3']}</p>
        <p>5: {report.data['4']}</p>
        <p>6: {report.data['5']}</p>
        <p>7: {report.data['6']}</p>
        <p>8: {report.data['7']}</p>
        <p>9: {report.data['8']}</p>
        <p>10: {report.data['9']}</p>
      </div>
      <div className = 'mentionsColumn'>
        <p>{report.data['0']}</p>
        <p>{report.data['1']}</p>
        <p>{report.data['2']}</p>
        <p>{report.data['3']}</p>
        <p>{report.data['4']}</p>
        <p>{report.data['5']}</p>
        <p>{report.data['6']}</p>
        <p>{report.data['7']}</p>
        <p>{report.data['8']}</p>
        <p>{report.data['9']}</p>
      </div>
    </div>
  )
}

export default RedditStocks;