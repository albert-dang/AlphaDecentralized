import React, {useContext} from 'react'
import ReportContext from '../ReportContext'
import './MetricsReport.css'

const Metrics = () => {
  const report = useContext(ReportContext)

  return (
    <div className = 'metricsBody' style={{marginTop: '30px'}}>
      <div className = 'metricsHeadings'>      
        <p>1Y Target (Analysts): </p>
        <p>Price: </p>
        <p>Ask: </p>
        <p>Bid: </p>
        <p>Open: </p>
        <p>Previous Close: </p>
        <p>Day's Range: </p>
        <p>52 Week Range: </p>
        <p>Beta (5Y Monthly): </p>
        <p>Avg Volume: </p>
        <p>Volume: </p>
        <p>Market Cap: </p>
        <p>Earnings Date: </p>
        <p>Ex-Dividend Date: </p>
        <p>Forward Divident & Yield: </p>
        <p>Earnings Per Share: </p>
        <p>Price/Earnings Ratio: </p>
      </div>
      <div className = 'metricsValues'>
        <p>{report.data['1y Target Est']}</p>
        <p>{report.data['Quote Price']}</p>
        <p>{report.data['Ask']}</p>
        <p>{report.data['Bid']}</p>
        <p>{report.data['Open']}</p>
        <p>{report.data['Previous Close']}</p>
        <p>{report.data["Day's Range"]}</p>
        <p>{report.data['52 Week Range']}</p>
        <p>{report.data['Beta (5Y Monthly)']}</p>
        <p>{report.data['Avg. Volume']}</p>
        <p>{report.data['Volume']}</p>
        <p>{report.data['Market Cap']}</p>
        <p>{report.data['Earnings Date']}</p>
        <p>{report.data['Ex-Dividend Date']}</p>
        <p>{report.data['Forward Dividend & Yield']}</p>
        <p>{report.data['EPS (TTM)']}</p>
        <p>{report.data['PE Ratio (TTM)']}</p>
      </div>
    </div>
  )
}

export default Metrics;