import React from 'react';
import './App.css';
import { TaskHolder } from '../../Components/TaskHolder/TaskHolder';
import {theme,ThemeContext} from '../../contexts/ThemeContext'
import { useState, useCallback } from 'react';

export default function App() {
    const [appTheme,setAppTheme] = useState(theme.usual);
    
    const toggleThemeHandler = useCallback(()=>{
      setAppTheme(appTheme === theme.usual ? theme.dark: theme.usual);},
      [appTheme]);

   return (
    <ThemeContext.Provider value = {appTheme}> 
      <div className="App">
          <button className={`${appTheme}ThemeBtn ThemeBtn`} 
            onClick={toggleThemeHandler}>
              {appTheme === theme.usual ? 'Темная тема': 'Светлая тема'}</button>
          <TaskHolder />
      </div>
    </ThemeContext.Provider>)
}