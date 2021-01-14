import React, {useEffect, useState} from 'react'
import List from '../List'
import WithListLoading from '../ListLoading'

export default function App() {
  const ListLoading = WithListLoading(List)
  const [appState, setAppState] = useState({
    loading: false,
    assets: null,
  });

  useEffect(() => {
    setAppState({ loading: true })
    const apiUrl = `https://dangitsal.pythonanywhere.com/api/fullsheet/`
    fetch(apiUrl)
      .then((res) => res.json())
      .then((assets) => {
        setAppState({ loading: false, assets: assets})
      })
  }, [setAppState])
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