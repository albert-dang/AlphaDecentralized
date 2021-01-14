import React, {useEffect, useState} from 'react'
import axios from 'axios'

export default function MetricsReport(){
  const listAssets = async () => {
    try {
        const res = await axios.get('https://dangitsal.pythonanywhere.com/api/fullsheet')

        return(
          <div className='MetricsReport'>
            {res.data.data}
          </div>
        )
    } catch (err) {
        console.error(err)
    }
  }
}
