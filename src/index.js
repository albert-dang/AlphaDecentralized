import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import {FundamentalReportProvider} from './components/FundamentalReportContext'
import {RedditStocksReportProvider} from './components/RedditStocksReportContext'
import reportWebVitals from './reportWebVitals'
import './index.css'

document.title = 'Alpha, Decentralized.'

ReactDOM.render(
  <React.StrictMode>
    <FundamentalReportProvider>
      <RedditStocksReportProvider>
        <App />
      </RedditStocksReportProvider>
    </FundamentalReportProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
