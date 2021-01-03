import React from 'react'
import PoweredByReact from './PoweredByReact'
import Terminal from './Terminal'
import './App.css'

function App(){
  return (
    <div className='App'>
      <React.Fragment>
        <PoweredByReact />
        <Terminal />
      </React.Fragment>
    </div>
  );
}

export default App