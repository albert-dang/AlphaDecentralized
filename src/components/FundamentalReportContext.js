import React, {Component, createContext} from "react"

const FundamentalReportContext = createContext()

export class FundamentalReportProvider extends Component{
  state = {
    data: 'Analyze some assets!'
  }

  setData = (data) => {
    this.setState((prevState) => (({data})))
  }

  render(){
    const {children} = this.props
    const {data} = this.state
    const {setData} = this

    return(
        <FundamentalReportContext.Provider
          value={{
            data,
            setData
          }}
        >
          {children}
        </FundamentalReportContext.Provider>
      )
    }
  }

export default FundamentalReportContext