import React from 'react'
import FormSlider from './components/formSlider/FormSlider'
import ReportSlider from './components/reportSlider/Report'
import ShowcaseSlider from './components/poweredByShowcase/ShowcaseSlider'
import './App.css'

export default function App(){
  return (
    <div className='appWrapper'>
      <>
        <FormSlider />
        <ReportSlider />
        <ShowcaseSlider />
      </>
    </div>
  );
}