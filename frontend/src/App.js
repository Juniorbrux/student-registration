
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from'./components/card' 
import Login from './pages/Login';
import Dashboard from'./pages/dashboard'
import Update from'./pages/Update';
import Info from"./pages/info"
import Home from './frontend/home';
import Regi from"./frontend/register"
import Viewstudents from"./pages/viewStudent"
import'./frontend/jquery'
function App() {
  return (
    <>

    <Router>
    
         
           <Routes>
           <Route path="/" element={<Home/>} />
           <Route path="/register" element={<Regi/>} />
           <Route path="/login" element={<Login/>} />
           <Route path="/viewstudents/:id" element={<Viewstudents/>} /> 
           <Route path="/card" element={<Card/>} /> 
           <Route path='/dashboard' element={<Dashboard/>} />
           <Route path='/info' element={<Info/>} />
           <Route path="/update/:id" element={<Update/>} />
           </Routes>
    </Router>
        
    </>
  );
} 
export default App;
