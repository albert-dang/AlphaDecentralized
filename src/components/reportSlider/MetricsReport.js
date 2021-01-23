import React, {useContext} from 'react'
import ReportContext from '../ReportContext'

// This component displays name from Context
const Metrics = () => {
  const report = useContext(ReportContext)

  return (
    <div style={{marginTop: '30px'}}>
        <strong></strong>: {report.data}
    </div>
  )
}

export default Metrics;