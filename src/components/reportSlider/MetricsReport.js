import React, {useContext} from 'react'
import ReportContext from '../ReportContext'

// This component displays name from Context
const Metrics = () => {
  const report = useContext(ReportContext)

  return (
    <div style={{marginTop: '30px'}}>
      1Y Target Est (Analysts): {report.data['1y Target Est']}\n
      Price: {report.data['Quote Price']}\n
      Ask: {report.data['Ask']}\n
      Bid: {report.data['Bid']}\n
      Open: {report.data['Open']}\n
      Previous Close: {report.data['Previous Close']}\n
      Day's Range: {report.data["Day's Range"]}\n
      52 Week Range: {report.data["52 Week Range"]}\n
      Beta (5Y Monthly): {report.data['Beta (5Y Monthly)']}\n
      Avg Volume: {report.data['Avg. Volume']}\n
      Volume: {report.data['Volume']}\n
      Market Cap: {report.data['Market Cap']}\n
      Earnings Date: {report.data['Earnings Date']}\n
      Ex-Dividend Date: {report.data['Ex-Divident Date']}\n
      Forward Divident & Yield: {report.data['Forward Divident & Yield']}\n
      Earnings Per Share (1Y Trailing): {report.data['EPS (TTM)']}\n
      Price/Earnings Ratio (1Y Trailing): {report.data['PE Ratio (TTM)']}\n
    </div>
  )
}

export default Metrics;