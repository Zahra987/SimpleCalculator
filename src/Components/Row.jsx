import React from 'react'

export default function Row({inputInfo}) {
  return (
    <div className="row">
      <button className={`button ${inputInfo[0]}`}>{inputInfo[1]}</button>
      <button className={`button ${inputInfo[2]}`}>{inputInfo[3]}</button>
      <button className={`button ${inputInfo[4]}`}>{inputInfo[5]}</button>
      <button className={`button ${inputInfo[6]}`}>{inputInfo[7]}</button>
    </div>
  )
}
