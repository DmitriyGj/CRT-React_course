import './App.css';
import {TaskHolder} from './Components/TaskHolder/TaskHolder'
import React from 'react'
import {ThemeContext,theme} from './contexts/ThemeContext'
class App extends React.Component {

  constructor(props){
    super(props);
    this.state={
      theme:theme.usual
    };

    this.toggleThemeHandler = this.toggleThemeHandler.bind(this);
  }

  toggleThemeHandler(){
    this.setState(prevState=>{return {
      theme:prevState.theme === theme.usual ? theme.dark: theme.usual}
    });
  }

  render(){ return ( 
      <div className="App">
        <ThemeContext.Provider value = {this.state.theme}>
          <button className={this.state.theme+'ThemeBtn'+' ThemeBtn'} 
            onClick={this.toggleThemeHandler}>
              {this.state.theme === theme.usual ? 'Темная тема': 'Светлая тема'}</button>
          <TaskHolder />
        </ThemeContext.Provider>
      </div>)
  }
}

export default App;
