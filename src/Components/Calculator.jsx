import React,  {useState} from 'react'
import CalcInputs from './CalcInputs'
import Display from './Display'
import Header from './Header'
import CalcContext from './CalcContext'

export default function Calculator() {

  const [displayResult,setDisplayResult]=useState("0")
  const [displayOperations,setDisplayOperations]=useState("0")

  return (
    <CalcContext.Provider value={
      {
        displayResult:displayResult,
        setDisplayResult:setDisplayResult,
        displayOperations:displayOperations,
        setDisplayOperations:setDisplayOperations

      }
    }>

      <div className="calc">
       <Header/>
       <Display/>
       <CalcInputs/>
      </div>

    </CalcContext.Provider>
  )
}
