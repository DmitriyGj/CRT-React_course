import './App.css';
import {useState} from 'react'


function Footer(props){
  console.log('render footer')
  return (<footer className='Footer'>
    <h2>this is amazing application was created by Dmitriy</h2>
  </footer>)
}

function Smthng(props){
  const [count, setCount] = useState(0);
  console.log("render Smthng")
  return (<div>
            <h1>HI {props.name}</h1>
            <button onClick={()=>setCount(count+1)}>
              Click me, {props.name}
              </button>
            <p>You clicked {count} times</p>
          </div>);
}

function App() {
  console.log("render app")
  return (
    <div className="App">
        <Smthng name = 'Test'></Smthng>
        <Footer></Footer>
    </div>
  );
}

export default App;
