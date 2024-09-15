import React, { useState } from 'react';
import Dashboard from './pages/Dashboard';

import Login from './pages/Login';
import Register from './pages/Register';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Protected from './components/protected';

function App() {
  const [ isSignedIn, setIsSignedIn ] = useState(()=> {
    const userLogged = localStorage.getItem("access_token");
    return userLogged || false;
  });
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path= {"/"} element={
            <Protected  isSignedIn= {isSignedIn} >
              <Dashboard /> 
           </Protected>
           } />
          
          
        </Routes>
      </BrowserRouter>
  );
}

export default App;
