import React, {useState} from 'react';
import {ThemeContext} from '../../contexts/ThemeContext'
import { Outlet } from 'react-router-dom';
import { theme } from '../../constants/ThemeConstants';
import { NavigationMenu } from '../../Components/NavigationMenu/NavigationMenu';
import './MainPage.css';


export const MainPage = function MainPage(){
    const [appTheme, setAppTheme] = useState(theme.Usual);
    const toggleThemeHandler =()=> setAppTheme(appTheme === theme.Usual?theme.Light:theme.Usual);

    return(<ThemeContext.Provider value={appTheme}>
            <div className={`App app-theme-${appTheme}`} >
                <div className='App-header'>
                    <h1>Cretive финальный проект</h1>
                    <div className='App-controls'>
                    <NavigationMenu></NavigationMenu>
                    <button className='Theme-btn'
                        onClick={toggleThemeHandler}>{appTheme === theme.Usual ? '💡':'🌙' }</button>
                    </div>
                </div>
                <div className={`App-body app-theme-${appTheme}`}>
                    <Outlet/>
                </div>
            </div>
        </ThemeContext.Provider>)
}