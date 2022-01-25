import * as React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Routes/App/App.js';
import NavigationBlock from './Components/NavigationBlock/NavigationBlock';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import About from './Routes/About'
import { Provider } from 'react-redux';
import store from './redux/store.js'

const routes = {App: {path:'App', element:<App/>},
                About: {path:'About', element:<About/>}};

ReactDOM.render(
    <React.StrictMode>
      <Provider store = {store}>
        <BrowserRouter>
          <Routes>
            <Route path = '/' element ={<NavigationBlock/>}>
              <Route {...routes.App}/>
              <Route {...routes.About}/>
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
