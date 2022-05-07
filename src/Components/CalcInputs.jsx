import React ,{useContext}from 'react'
import CalcContext from './CalcContext'

export default function CalcInputs() {

  const calcContext= useContext(CalcContext);

  function ac(e) {
    calcContext.setDisplayOperations("0");
    calcContext.setDisplayResult("0");
  }
  function ce(e) {
    if (!(calcContext.displayOperations.length==1)) {
      calcContext.setDisplayOperations(calcContext.displayOperations.slice(0, -1));
      calcContext.setDisplayResult(calcContext.displayResult.slice(0, -1));
         }else{
          calcContext.setDisplayOperations("0");
          calcContext.setDisplayResult("0");
            }
  }
  function result(e) {
    const rst=(eval(calcContext.displayOperations)).toString();
    //if error ? write enter correct sentenses : run follow
    calcContext.setDisplayOperations(rst);
  }
  function operations(e) {


    if (calcContext.displayOperations=="0") {
      calcContext.setDisplayResult(e.target.value);
      calcContext.setDisplayOperations(e.target.value);
      
       }else{
         calcContext.setDisplayOperations(calcContext.displayOperations + e.target.value);
        }
  calcContext.setDisplayResult(eval(calcContext.displayOperations + e.target.value).toString());
  //if error ? write enter correct sentenses : run follow
  }

  return (
    <>
     <div className="row">
      <input type="button" className="button ac" value="ac" onClick={ac} />
      <input type="button" className="button ce" value="ce" onClick={ce} />
      <input type="button" className="button div" value="%" onClick={operations} />
      <input type="button" className="button mult" value="*" onClick={operations} />
      <input type="button" className="button seven" value="7" onClick={operations} />
      <input type="button" className="button eight" value="8" onClick={operations} />
      <input type="button" className="button nine" value="9" onClick={operations} />
      <input type="button" className="button mult" value="/" onClick={operations} />
      <input type="button" className="button four" value="4" onClick={operations} />
      <input type="button" className="button five" value="5" onClick={operations} />
      <input type="button" className="button six" value="6" onClick={operations} />
      <input type="button" className="button minus" value="-" onClick={operations} />
      <input type="button" className="button one" value="1" onClick={operations} />
      <input type="button" className="button two" value="2" onClick={operations} />
      <input type="button" className="button three" value="3" onClick={operations} />
      <input type="button" className="button plus" value="+" onClick={operations} />
      <input type="button" className="button dot" value="0" onClick={operations} />
      <input type="button" className="button dot" value="." onClick={operations} /> 
      <input type="button" className="button zero" value="=" onClick={result} />  
     </div>
    </>
  )
}
