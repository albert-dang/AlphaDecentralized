import React, {Component, useContext} from 'react'
import {ReportContext} from '../ReportContext'

export default function MetricsGet(jsonData){
    const report = useContext(ReportContext)
    report.useContext(jsonData)
}

