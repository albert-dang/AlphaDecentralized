import React, {useContext} from 'react'
import ReportContext from '../ReportContext'

// This component displays name from Context
const Metrics = () => {
  const report = useContext(ReportContext)

  return (
    <div className = 'metricsBody' style={{marginTop: '30px'}}>
      <p>1Y Target Est (Analysts):&nbsp;&nbsp;&nbsp;&nbsp;{report.data['1y Target Est']}</p>
      <p>Price:&nbsp;&nbsp;&nbsp;&nbsp;{report.data['Quote Price']}</p>
      <p>Ask:&nbsp;&nbsp;&nbsp;&nbsp;{report.data['Ask']}</p>
      <p>Bid:&nbsp;&nbsp;&nbsp;&nbsp;{report.data['Bid']}</p>
      <p>Open:&nbsp;&nbsp;&nbsp;&nbsp;{report.data['Open']}</p>
      <p>Previous Close:&nbsp;&nbsp;&nbsp;&nbsp;{report.data['Previous Close']}</p>
      <p>Day's Range:&nbsp;&nbsp;&nbsp;&nbsp;{report.data["Day's Range"]}</p>
      <p>52 Week Range:&nbsp;&nbsp;&nbsp;&nbsp;{report.data["52 Week Range"]}</p>
      <p>Beta (5Y Monthly):&nbsp;&nbsp;&nbsp;&nbsp;{report.data['Beta (5Y Monthly)']}</p>
      <p>Avg Volume:&nbsp;&nbsp;&nbsp;&nbsp;{report.data['Avg. Volume']}</p>
      <p>Volume:&nbsp;&nbsp;&nbsp;&nbsp;{report.data['Volume']}</p>
      <p>Market Cap:&nbsp;&nbsp;&nbsp;&nbsp;{report.data['Market Cap']}</p>
      <p>Earnings Date:&nbsp;&nbsp;&nbsp;&nbsp;{report.data['Earnings Date']}</p>
      <p>Ex-Dividend Date:&nbsp;&nbsp;&nbsp;&nbsp;{report.data['Ex-Divident Date']}</p>
      <p>Forward Divident & Yield:&nbsp;&nbsp;&nbsp;&nbsp;{report.data['Forward Divident & Yield']}</p>
      <p>Earnings Per Share (1Y Trailing):&nbsp;&nbsp;&nbsp;&nbsp;{report.data['EPS (TTM)']}</p>
      <p>Price/Earnings Ratio (1Y Trailing):&nbsp;&nbsp;&nbsp;&nbsp;{report.data['PE Ratio (TTM)']}</p>
    </div>
  )
}

export default Metrics;