import React, {Component, createContext} from "react"

const ReportContext = createContext()

export class ReportProvider extends Component{
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
        <ReportContext.Provider
          value={{
            data,
            setData
          }}
        >
          {children}
        </ReportContext.Provider>
      )
    }
  }

export default ReportContext