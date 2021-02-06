import React, {useContext} from 'react'
import ReportContext from '../ReportContext'

// This component displays name from Context
const Metrics = () => {
  const report = useContext(ReportContext)

  return (
    <div style={{marginTop: '30px'}}>
      1Y Target Est (Analysts): {report.data['1y Target Est']}
      Price: {report.data['Quote Price']}
      Ask: {report.data['Ask']}
      Bid: {report.data['Bid']}
      Open: {report.data['Open']}
      Previous Close: {report.data['Previous Close']}
      Day's Range: {report.data["Day's Range"]}
      52 Week Range: {report.data["52 Week Range"]}
      Beta (5Y Monthly): {report.data['Beta (5Y Monthly)']}
      Avg Volume: {report.data['Avg. Volume']}
      Volume: {report.data['Volume']}
      Market Cap: {report.data['Market Cap']}
      Earnings Date: {report.data['Earnings Date']}
      Ex-Dividend Date: {report.data['Ex-Divident Date']}
      Forward Divident & Yield: {report.data['Forward Divident & Yield']}
      Earnings Per Share (1Y Trailing): {report.data['EPS (TTM)']}
      Price/Earnings Ratio (1Y Trailing): {report.data['PE Ratio (TTM)']}
    </div>
  )
}

export default Metrics;