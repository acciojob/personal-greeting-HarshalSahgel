
import React from "react";
import './../styles/App.css';

const App = () => {

  const changingState = (e) =>{
    let value = e.target.value;
    <p>Hello {value}!</p>
  }

  return (
    <div>
       <input type="text" onChange = {changingState}></input>
       
    </div>
  )
}

export default App
