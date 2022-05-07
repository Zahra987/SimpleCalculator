import React, { useContext } from 'react'
import CalcContext from './CalcContext'

export default function Display() {

  const calcContext= useContext(CalcContext);

  return (
    <div className="display">
      <div className="display-indicate">
        max
      </div>
      <div className="display-main">
       {calcContext.displayResult}
      </div>
      
      <div className="display-operations">
        {calcContext.displayOperations}
      </div>
    </div>
  )
}
