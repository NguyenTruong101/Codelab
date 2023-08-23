import './App.css';
import React from 'react';
import AdminSignin from '../src/pages/AdminPages/AdminSignin.js';


import {
  BrowserRouter,
  Route,
  Link,
  Routes,
} from "react-router-dom";
import LayoutAdmin from './Components/Layout/LayoutAdmin.js';
import TypeCourse from './pages/AdminPages/TypeCourse';
import Course from './pages/AdminPages/Course';
function App() {
  return (
   <div>
    <BrowserRouter>
      <Routes>
        <Route exact path ='/adminSignin' element = {<AdminSignin/>} ></Route>
        <Route path='/admin' element={<LayoutAdmin/>}>
          <Route path ='course-type' element={<TypeCourse />} />
          <Route path ='course' element={<Course />} />
        </Route>
      </Routes>
    </BrowserRouter>
   </div>
  );
}

export default App;
