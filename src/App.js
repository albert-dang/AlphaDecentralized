import React from 'react'
import QueryForm from './components/queryForm/QueryForm'
import ReportSlider from './components/reportSlider/ReportSlider'
import './App.css'

export default function App(){
  return (
    <div className='appWrapper'>
      <>
        <QueryForm />
        <ReportSlider />
        <div/>
      </>
    </div>
  );
}