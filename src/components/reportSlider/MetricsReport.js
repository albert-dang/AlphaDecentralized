import React, {useEffect, useState} from 'react'
import axios from 'axios'

export default function MetricsReport(){
  const data = axios.request({url: 'https://dangitsal.pythonanywhere.com/api/fullsheet'}).data
  return <p>{data}</p>
}