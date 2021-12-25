import {React} from 'react';
import {useState} from 'react'
import Header from './components/Header';
import logo from './logo.svg';
import './App.css';

const Card = ({person,club,cardClick})=>{
  const [goals, setGoals] = useState(0);

  const handleCardClick =()=>{
    setGoals(goals+1);
    cardClick();
  };

  return(
    <div onClick={handleCardClick}>
      <h2>
        {person.firstName} {person.lastName}
      </h2>
        <span>
          Играет в клубе: {club}
        </span>
        <h3>
          Кол-во забитых голов: {goals}
        </h3>
    </div>
  );
}


function App() {
  const [teamGoals,setTeamGoals] = useState(0);

  const handleCardClick = ()=>{
    setTeamGoals(teamGoals+1);
  }

  return (
    <div className="App">
      <h1>Кол-во командных голов: {teamGoals}</h1>
      <header className="App-header">
        <Card cardClick={handleCardClick}
        person = 
          {{firstName:'ivan',lastName: 'Messi'}} 
          club = 'Zenit'/>
          <Card cardClick={handleCardClick}
        person = 
          {{firstName:'ivan',lastName: 'Messi'}} 
          club = 'Zenit'/>
          <Card cardClick={handleCardClick}
        person = 
          {{firstName:'ivan',lastName: 'Messi'}} 
          club = 'Zenit'/>
      </header>
      <Header></Header>
    </div>
  );
}

export default App;
