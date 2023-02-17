import './App.css';
import { useState ,useEffect } from 'react';
function App() {
   const [num1, setNum1] = useState(0);
   const [num2, setNum2] = useState(0);
   const [sum,setSum]= useState(0);
   const [mul, setMul]= useState(0);
  
  //  useEffect(() => {
  //    setSum(num1+num2);  
  //    setMul(num1 * num2);
  //  }, [num1, num2]);
  
  const handleSum = () => {
    setSum(num1+num2);
  };
  const handleMul = () => {
    setMul(num1 * num2);
  };
  return (
    <div className="container">
    <div className='input'>
      <div>
        <p>  number 1:</p> 
        <input type="number" value={num1} onChange={(e) => setNum1(e.target.value)} />
      </div>
      <div>
      <p>  number 2:</p>
      <input type="number" value={num2} onChange={(e) => setNum2(e.target.value)} />
      </div>
    </div>
      <div  className="sum">
        <button onClick={handleSum}> sum:{sum}</button>
      
        <button onClick={handleMul}> mul:{mul}</button>
        </div>
      
    </div>
  );
}

export default App;
