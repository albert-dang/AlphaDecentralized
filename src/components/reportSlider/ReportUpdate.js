import {useContext} from 'react'
import {ReportContext} from '../ReportContext'

export default function ReportUpdate(jsonData){
    const report = useContext(ReportContext)
    report.useContext(jsonData)
}

