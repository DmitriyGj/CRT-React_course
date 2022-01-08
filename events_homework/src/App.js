import './App.css';
import {GufBlock} from './components/GufBlock/GufBlock'
import {TalkativeBlock} from './components/TalkativeBlock/TalkativeBlock'
import {SomeBlock} from './components/SomeBlock/SomeBlock'

function App() {
  return (
    <div className="App">
      <TalkativeBlock />
      <GufBlock/>
      <SomeBlock/>
    </div>
  );
}

export default App;
