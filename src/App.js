import React, { useState } from 'react';
import Dashboard from './pages/Dashboard';

import Products from './pages/Products';
import ProductsAdd from './pages/Products/ProductsAdd';

import Customer from './pages/Customer';
import CustomerAdd from './pages/Customer/CustomerAdd';

import Category from './pages/Category';
import CategoryAdd from './pages/Category/CategoryAdd';

import Suppliers from './pages/Suppliers';
import SuppliersAdd from './pages/Suppliers/SuppliersAdd';

import Stock_levels from './pages/Stock_levels';

import User_Add from './pages/User_Add';
import User_list from './pages/User_list';

import Purchase from './pages/Purchase';
import PurchaseAdd from './pages/Purchase/PurchaseAdd';
import PurchasePay from './pages/Purchase/PurchasePay';


import Sales from './pages/Sales';
import SalesAdd from './pages/Sales/SalesAdd';
import SalesPay from './pages/Sales/SalesPay';

import SalesReturn from './pages/SalesReturn';
import SalesReturnAdd from './pages/SalesReturn/SalesReturnAdd';
import SalesReturnPay from './pages/SalesReturn/SalesReturnPay';

import Invoice from './pages/Sales/Invoice';
import PurchaseInvoice from './pages/Purchase/PurchaseInvoice';

import PurchaseReturn from './pages/PurchaseReturn';
import PurchaseReturnAdd from './pages/PurchaseReturn/PurchaseReturnAdd';
import PurchaseReturnPay from './pages/PurchaseReturn/PurchaseReturnPay';

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

          <Route path="/suppliers" element={<Suppliers />} />
          <Route path="/suppliers/add" element={<SuppliersAdd />} />
          <Route path="/suppliers/edit/:id" element={<SuppliersAdd />} />

          <Route path="/purchase" element={<Purchase />} />
          <Route path="/purchase/add" element={<PurchaseAdd />} />
          <Route path="/purchase/edit/:id" element={<PurchaseAdd />} />
          <Route path="/purchase/pay/:id" element={<PurchasePay />} />


          <Route path="/purchasereturn" element={<PurchaseReturn />} />
          <Route path="/purchasereturn/add" element={<PurchaseReturnAdd />} />
          <Route path="/purchasereturn/edit/:id" element={<PurchaseReturnAdd />} />
          <Route path="/purchasereturn/pay/:id" element={<PurchaseReturnPay />} />

          <Route path="/sales" element={<Sales />} />
          <Route path="/sales/add" element={<SalesAdd />} />
          <Route path="/sales/edit/:id" element={<SalesAdd />} />
          <Route path="/sales/pay/:id" element={<SalesPay />} />

          <Route path="/Invoice" element={<Invoice />} />
          <Route path="/Invoice/:salesId" element={<Invoice />} />
          <Route path="/purchaseinvoice/:purchaseId" element={<PurchaseInvoice />} />

          <Route path="/salesreturn" element={<SalesReturn />} />
          <Route path="/salesreturn/add" element={<SalesReturnAdd />} />
          <Route path="/salesreturn/edit/:id" element={<SalesReturnAdd />} />
          <Route path="/salesreturn/pay/:id" element={<SalesReturnPay />} />

          <Route path="/customer" element={<Customer />} />
          <Route path="/customer/add" element={<CustomerAdd />} />
          <Route path="/customer/edit/:id" element={<CustomerAdd />} />

          <Route path="/category" element={<Category />} />
          <Route path="/category/add" element={<CategoryAdd />} />
          <Route path="/category/edit/:id" element={<CategoryAdd />} />

          <Route path="/Stock_levels" element={<Stock_levels />} />

          <Route path="/PurchaseReturn" element={<PurchaseReturn />} />
          <Route path="/PurchaseReturnAdd" element={<PurchaseReturnAdd />} />
          
          <Route path="/User_Add" element={<User_Add />} />
          <Route path="/User_list" element={<User_list />} />
          
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
