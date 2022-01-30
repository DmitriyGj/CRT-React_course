import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import NavigationConstants from './constants/NavigationConstants';


const App: React.FunctionComponent = function App() {
  const {ConstantRoutesBuffer} = NavigationConstants;
  return (
        <BrowserRouter>
            <Routes>
                <Route {...ConstantRoutesBuffer.StartPage}>
                    <Route {...ConstantRoutesBuffer.TaskManager}/>
                    <Route {...ConstantRoutesBuffer.About}/>
                </Route>
                <Route {...ConstantRoutesBuffer.NotFound}/>    
            </Routes>
        </BrowserRouter>
  );
}

export default App;