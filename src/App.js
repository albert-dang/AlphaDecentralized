import React from 'react'
import CoinLayerForm from './components/CoinLayerForm'
import Report from './components/Report'
import ShowcaseSlider from './components/poweredByShowcase/ShowcaseSlider'
import './App.css'

export default function App(){
  return (
    <div className='AppWrapper'>
      <>
        <CoinLayerForm />
        <Report />
        <ShowcaseSlider />
      </>
    </div>
  );
}