import React, {useState} from "react";
import "./Counter.css"

function Counter() {
   const [counterValue, setCounterValue] = useState(0);
   const [inputValue, setInputValue] = useState(1);

   const addToCounter = () => {
      setCounterValue(counterValue + inputValue)
   }

   const subtractToCounter = () => {
      setCounterValue(counterValue - inputValue)
   }

   return (
   <div>
      <h2 data-testid="header">My Counter</h2>
      <h3  
         data-testid="counter"
         className={`${counterValue >= 100 ? "green" : ""}${counterValue <= -100 ? "red" : ""}`}
      >
         {counterValue}
      </h3>
      <h4>The counter adds or substracts by the number in the input field.</h4>
      <button 
         data-testid="subtract-btn"
         onClick={subtractToCounter}
      >-
      </button>
      <input 
         data-testid="input" 
         type="number" 
         value={inputValue}
         className="text-center"
         onChange={(e)=> {
            setInputValue(parseInt(e.target.value))
         }}>
      </input>
      <button 
         data-testid="add-btn"
         onClick={addToCounter}
      >+
      </button>
   </div>
   );
}

export default Counter;
