import React, {Component, createContext} from "react"

const RedditStocksContext = createContext()

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