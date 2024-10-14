import React, { useState } from 'react';
import Dashboard from './pages/Dashboard';
import Products from './pages/Products';
import ProductsAdd from './pages/Products/ProductsAdd';
import Categories from './pages/Categories';

import Order from './pages/Order';
import OrderAdd from './pages/Order/OrderAdd';

import Customer from './pages/Customer';
import CustomerAdd from './pages/Customer/CustomerAdd';

import Order_history from './pages/Order_history';
import Suppliers from './pages/Suppliers';
import SuppliersAdd from './pages/Suppliers/SuppliersAdd';

import Stock_levels from './pages/Stock_levels';
import Stock_Adjustment from './pages/Stock_Adjustment';
import User_Add from './pages/User_Add';
import User_list from './pages/User_list';
import Seles_report from './pages/Seles_report';
import Supplier_reports from './pages/Supplier_reports';

import Purchase from './pages/Purchase';
import PurchaseAdd from './pages/Purchase/PurchaseAdd';

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

          <Route path="/products" element={<Products />} />
          <Route path="/products/add" element={<ProductsAdd />} />
          <Route path="/products/edit/:id" element={<ProductsAdd />} />

          <Route path="/Categories" element={<Categories />} />

          <Route path="/order" element={<Order />} />
          <Route path="/order/add" element={<OrderAdd />} />
          <Route path="/order/edit/:id" element={<OrderAdd />} />
          <Route path="/Order_history" element={<Order_history />} />

          <Route path="/suppliers" element={<Suppliers />} />
          <Route path="/suppliers/add" element={<SuppliersAdd />} />
          <Route path="/suppliers/edit/:id" element={<SuppliersAdd />} />

          <Route path="/purchase" element={<Purchase />} />
          <Route path="/purchase/add" element={<PurchaseAdd />} />
          <Route path="/purchase/edit/:id" element={<PurchaseAdd />} />

          <Route path="/customer" element={<Customer />} />
          <Route path="/customer/add" element={<CustomerAdd />} />
          <Route path="/customer/edit/:id" element={<CustomerAdd />} />

          <Route path="/Stock_levels" element={<Stock_levels />} />
          <Route path="/Stock_Adjustment" element={<Stock_Adjustment />} />
          <Route path="/User_Add" element={<User_Add />} />
          <Route path="/User_list" element={<User_list />} />
          <Route path="/Seles_report" element={<Seles_report />} />
          <Route path="/Supplier_reports" element={<Supplier_reports />} />

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
