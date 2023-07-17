import './App.css'
import { useState, useEffect } from 'react';

export function App(){
  const [date, setDate] = useState(new Date());
  
  function refreshClock() {
    setDate(new Date());
  }
  useEffect(() => {
    const timerId = setInterval(refreshClock, 1000);
    return function cleanup() {
      clearInterval(timerId);
    };
  }, []);
  return (
    <h1>
      {date.toLocaleTimeString()}
    </h1>
  );
}
export default App;
