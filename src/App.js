import React from 'react'
import CoinLayerForm from './CoinLayerForm'
import PoweredByCoinLayer from './PoweredByCoinLayer'
import PoweredByReact from './PoweredByReact'
import './App.css'

export default function App(){
  return (
    <>
      <CoinLayerForm />
      <PoweredByCoinLayer /> <PoweredByReact />
    </>
  );
}