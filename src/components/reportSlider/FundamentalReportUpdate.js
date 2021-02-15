import {useContext} from 'react'
import {FundamentalReportContext} from '../FundamentalReportContext'

export default function FundamentalReportUpdate(jsonData){
    const report = useContext(FundamentalReportContext)
    report.useContext(jsonData)
}

