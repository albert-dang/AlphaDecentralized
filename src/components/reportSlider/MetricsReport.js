import React, {useContext} from 'react'
import {ReportContext } from './ReportContext'

// This component displays name from Context
const Metrics = () => {
  const report = useContext(ReportContext)

  return (
    <div style={{ marginTop: '30px' }}>
      <h2 className="is-size-4">
        <strong>Data</strong>: {report.data}
      </h2>
    </div>
  )
}

export default Metrics;