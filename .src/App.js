import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';

// const Person = (props) => {
//   return (
//     <>
//      <h1>Name: {props.name}</h1>
//      <h2>Last Name: {props.lastName}</h2>
//      <h2>Age: {props.age}</h2>
//     </>
//   )
// }
const App = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    setCounter(100);
  }, []);

  return (
    <div className="App">
        <button onClick={() => setCounter((prevCount) => prevCount - 1)}>-</button>
        <h1>{counter}</h1>
        <button onClick={() => setCounter((prevCount) => prevCount + 1)}>+</button>
    </div>
  );
}

export default App;
