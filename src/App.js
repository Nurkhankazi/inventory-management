import React, { useState } from 'react';
import Dashboard from './pages/Dashboard';
import Products from './pages/Products';
import ProductsAdd from './pages/Products/ProductsAdd';
// import Products_list from './pages/Products_list';
import Categories from './pages/Categories';
import Order_list from './pages/Order_list';
import Order_Add from './pages/Order_Add';
import Order_history from './pages/Order_history';
import Supplier_Add from './pages/Supplier_Add';
import Supplier_View from './pages/Supplier_View';
import Stock_levels from './pages/Stock_levels';
import Stock_Adjustment from './pages/Stock_Adjustment';
import User_Add from './pages/User_Add';
import User_list from './pages/User_list';
import Seles_report from './pages/Seles_report';
import Supplier_reports from './pages/Supplier_reports';
import User_management from './pages/User_management';
import Notifications from './pages/Notifications';
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
          <Route path="/Products" element={<Products />} />
          <Route path="/Products/add" element={<ProductsAdd />} />
          <Route path="/Products/edit/:id" element={<ProductsAdd />} />
          {/* <Route path="/Products_list" element={<Products_list />} /> */}
          <Route path="/Categories" element={<Categories />} />
          <Route path="/Order_list" element={<Order_list />} />
          <Route path="/Order_Add" element={<Order_Add />} />
          <Route path="/Order_history" element={<Order_history />} />
          <Route path="/Supplier_Add" element={<Supplier_Add />} />
          <Route path="/Supplier_View" element={<Supplier_View />} />
          <Route path="/Stock_levels" element={<Stock_levels />} />
          <Route path="/Stock_Adjustment" element={<Stock_Adjustment />} />
          <Route path="/User_Add" element={<User_Add />} />
          <Route path="/User_list" element={<User_list />} />
          <Route path="/Seles_report" element={<Seles_report />} />
          <Route path="/Supplier_reports" element={<Supplier_reports />} />
          <Route path="/User_management" element={<User_management />} />
          <Route path="/Notifications" element={<Notifications />} />
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
