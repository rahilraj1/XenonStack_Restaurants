import React from 'react'
import './App.css'
import Navbar from './component/Navbar'
import Home from './component/Home'
import Login from './component/Login'
import SignUp  from './component/SignUp';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
function App() {
  return (
      <>
     
        <Navbar></Navbar>
           <Routes>
             <Route path="/Login" element={<Login></Login>}></Route>
             <Route path="/SignUp" element={<SignUp></SignUp>}></Route>
             <Route path="/home" element={<Home></Home>}></Route>
           </Routes>
        
  
       
      </>
  );
}
export default App;
