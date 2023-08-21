import './App.css';
import React from 'react';
import AdminSignin from './Components/AdminComponents/AdminSignin';

import {
  BrowserRouter,
  Route,
  Link,
  Routes,
} from "react-router-dom";
function App() {
  return (
   <div>
    <BrowserRouter>
      <Routes>
        <Route exact path ='/adminSignin' element = {<AdminSignin/>} ></Route>
      </Routes>
    </BrowserRouter>
   </div>
  );
}

export default App;
