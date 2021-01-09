import React from 'react'
import FormSlider from './components/formSlider/FormSlider'
import Report from './components/reportSlider/Report'
import ShowcaseSlider from './components/poweredByShowcase/ShowcaseSlider'
import './App.css'

export default function App(){
  return (
    <div className='AppWrapper'>
      <>
        <FormSlider />
        <Report />
        <ShowcaseSlider />
      </>
    </div>
  );
}