import './App.css';
import {useState} from 'react'
import {CardHolder} from './components/card_holder/CardHolder'
function App() {
  const [totalTime, setTotalTime] = useState(0)

  function handleCalculateTime(time = 1) {
      setTotalTime(totalTime + time);
    }

  return (
    <div className="App">
      <h1>Общее время жизни сщуествующих карточек : {totalTime}</h1>
      <div className='Card_container'>
        <CardHolder parentHandle = {handleCalculateTime}></CardHolder>
        <CardHolder parentHandle = {handleCalculateTime}></CardHolder>
        <CardHolder parentHandle = {handleCalculateTime}></CardHolder>
      </div>  
    </div>
  );
}

export default App;
