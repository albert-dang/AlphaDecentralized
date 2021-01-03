import React from 'react'
import PoweredByReact from './PoweredByReact'
import Terminal from './Terminal'
import './App.css'

function App(){
  return (
    <React.Fragment className='App'>
      <PoweredByReact />
      <Terminal />
    </React.Fragment>
  );
}

export default App