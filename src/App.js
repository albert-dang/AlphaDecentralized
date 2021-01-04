import React from 'react'
import PoweredByReact from './PoweredByReact'
import CoinLayerForm from './CoinLayerForm'
import './App.css'

function App(){
  return (
    <React.Fragment>
      <CoinLayerForm />
      <PoweredByReact />
    </React.Fragment>
  );
}

export default App