import React, {Component, createContext} from "react"

const RedditStocksContext = createContext()
var redditStocks

fetch(`https://dangitsal.pythonanywhere.com/api/redditstocks`)
.then(response => response.json())
.then((jsonData) => {
    console.log(JSON.stringify(jsonData))
    redditStocks = jsonData
})
.catch((error) => {
console.error(error)
})
console.log(JSON.stringify(redditStocks))

export class RedditStocksProvider extends Component{
  state = {
    data: 'Loading...'
  }

  setData = (data) => {
    this.setState((prevState) => (({data})))
  }

  render(){
    const {children} = this.props
    const {data} = this.state
    const {setData} = this

    return(
        <RedditStocksContext.Provider
          value={{
            data,
            setData
          }}
        >
          {children}
        </RedditStocksContext.Provider>
      )
    }
  }

export default RedditStocksContext