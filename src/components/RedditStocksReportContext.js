import React, {Component, createContext} from "react"

fetch(`https://dangitsal.pythonanywhere.com/api/redditstocks`)
.then(response => response.json())
.then((jsonData) => {
    console.log(JSON.stringify(jsonData))
})
.catch((error) => {
console.error(error)
})

const RedditStocksReportContext = createContext()

export class RedditStocksReportProvider extends Component{
  state = {
    data: {jsonData}
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