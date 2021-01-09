import React from 'react'
import CryptoForm from './components/querySlider/CryptoForm'
import Report from './components/reportSlider/Report'
import ShowcaseSlider from './components/poweredByShowcase/ShowcaseSlider'
import './App.css'

export default function App(){
  return (
    <div className='AppWrapper'>
      <>
        <CryptoForm />
        <Report />
        <ShowcaseSlider />
      </>
    </div>
  );
}