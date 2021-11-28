import React, {useState} from "react";

function App() {
  const [count, setCount] = useState(0);
  let odd = 'нечётное',
      even = 'чётное';
  const isEven = n => !(n % 2);
  let compare = (isEven(count) === true) ? even : odd;
  
  return (
    <div className= "container my-5">
      <div className = "card text-center my-5">
        <div className = "card body">
          <h1>{count}</h1>
          <div className = "my-5">
            <h2 className = "my-5">Введено {compare} число</h2>
            <button className = "btn btn-success mx-3" onClick={()=> setCount(count+1)}>+</button>
            <button className = "btn btn-secondary mx-3"onClick={()=> setCount(0)} disabled ={count===0}>Reset</button>
            <button className = "btn btn-danger mx-3"onClick={()=> setCount(count-1)}disabled ={count===0}>-</button>


          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
