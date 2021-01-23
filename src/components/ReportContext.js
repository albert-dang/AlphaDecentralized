import React, {createContext, useState} from "react"

export const ReportContext = createContext()

export const ReportProvider = ({children}) => {
  const [data, setData] = useState('hello world')

  return (
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