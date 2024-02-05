import "./App.css";
import React, {useState} from "react";
import Button from "./component/Button";
import Remove from "./component/Remove";

function App() {
  //let counter = 10;

  // 10 is the default value that will be set in variable counter which is at 0th Index;
  let [counter, setCounter] = useState(10);

  const addValueHandler = () => {
  //  counter = counter + 1;
     setCounter(counter + 1);
    //console.log(counter);
  }

  const removeValueHandler = () => {
    // counter = counter - 1;
    // console.log(counter);
      setCounter(counter - 1);
  }
  return (
    <>

      <div className="flex flex-col items-center mt-[20%]"> 
          <h1 className="text-4xl">TRIGGERS AND STATES</h1><br></br>
          <h2 className="border p-5  bg-red-500 rounded-md">Counter Value: {counter}</h2>

          <br></br>
          <button onClick={addValueHandler} className="mt-[10px] border bg-slate-400 p-3 rounded-full">Add Value</button>
          <button onClick = {removeValueHandler} className="mt-[10px] border bg-slate-400 p-3 rounded-full">Remove Value</button>
      </div>
    </>
  );
}

export default App;
