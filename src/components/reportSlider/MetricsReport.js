import React, {useContext} from 'react'
import ReportContext from '../ReportContext'

// This component displays name from Context
const Metrics = () => {
  const report = useContext(ReportContext)

  return (
    <div style={{marginTop: '30px'}}>
      <p>1Y Target Est (Analysts): {report.data['1y Target Est']}</p>
      <p>Price: {report.data['Quote Price']}</p>
      <p>Ask: {report.data['Ask']}</p>
      <p>Bid: {report.data['Bid']}</p>
      <p>Open: {report.data['Open']}</p>
      <p>Previous Close: {report.data['Previous Close']}</p>
      <p>Day's Range: {report.data["Day's Range"]}</p>
      <p>52 Week Range: {report.data["52 Week Range"]}</p>
      <p>Beta (5Y Monthly): {report.data['Beta (5Y Monthly)']}</p>
      <p>Avg Volume: {report.data['Avg. Volume']}</p>
      <p>Volume: {report.data['Volume']}</p>
      <p>Market Cap: {report.data['Market Cap']}</p>
      <p>Earnings Date: {report.data['Earnings Date']}</p>
      <p>Ex-Dividend Date: {report.data['Ex-Divident Date']}</p>
      <p>Forward Divident & Yield: {report.data['Forward Divident & Yield']}</p>
      <p>Earnings Per Share (1Y Trailing): {report.data['EPS (TTM)']}</p>
      <p>Price/Earnings Ratio (1Y Trailing): {report.data['PE Ratio (TTM)']}</p>
    </div>
  )
}

export default Metrics;