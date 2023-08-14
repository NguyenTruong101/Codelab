import './App.css';
import React from 'react';
import AdminLogin from './Components/AdminComponents/AdminLogin';

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
        <Route exact path ='/adminLogin' element = {<AdminLogin/>} ></Route>
      </Routes>
    </BrowserRouter>
   </div>
  );
}

export default App;
