import React, {Component, createContext} from "react"

const redditstocks

fetch(`https://dangitsal.pythonanywhere.com/api/redditstocks`)
.then(response => response.json())
.then((jsonData) => {
    console.log(JSON.stringify(jsonData))
    redditstocks = jsonData
})
.catch((error) => {
console.error(error)
})

const RedditStocksReportContext = createContext()

export class RedditStocksReportProvider extends Component{
  state = {
    data: redditstocks
  }

  setData = (data) => {
    this.setState((prevState) => (({data})))
  }

  render(){
    const {children} = this.props
    const {data} = this.state
    const {setData} = this

    return(
        <RedditStocksReportContext.Provider
          value={{
            data,
            setData
          }}
        >
          {children}
        </RedditStocksReportContext.Provider>
    )
    }
  }

export default RedditStocksReportContext