import React, {useEffect, useState} from 'react'
import axios from 'axios'

export default function MetricsReport() {
  const [appState, setAppState] = useState({
    loading: false,
    assets: null,
  });

  useEffect(() => {
    setAppState({ loading: true });
    const apiUrl = 'https://dangitsal.pythonanywhere.com/api/fullsheet';
    axios.get(apiUrl).then((assets) => {
      const allAssets = assets.data;
      setAppState({ loading: false, assets: allAssets });
    });
  }, [setAppState]);
  return (
    <div className='MetricsReport'>
      <span>${allAssets}</span>
    </div>
  )
}