import React, {useEffect, useState} from 'react'
import List from '../List'
import WithListLoading from '../ListLoading'
import axios from 'axios'

export default function MetricsReport() {
  const ListLoading = WithListLoading(List)
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
      <div className='container'>
        <h1>Assets</h1>
      </div>
      <div className='asset-container'>
        <ListLoading isLoading={appState.loading} assets={appState.assets} />
      </div>
    </div>
  )
}